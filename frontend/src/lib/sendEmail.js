import { assertSupabase } from './supabase';

export async function sendNewsletterEmail(subject, message) {
  const client = assertSupabase();
  const { data: sessionData, error: sessionError } = await client.auth.getSession();

  if (sessionError) {
    throw new Error('Erro ao validar sessão de administrador.');
  }

  let session = sessionData?.session ?? null;
  if (!session) {
    throw new Error('Sessão expirada. Faça login novamente para enviar e-mails.');
  }

  // Evita enviar com token quase expirando.
  const nowInSeconds = Math.floor(Date.now() / 1000);
  if (session.expires_at && session.expires_at <= nowInSeconds + 60) {
    const { data: refreshedData, error: refreshError } = await client.auth.refreshSession();
    if (refreshError || !refreshedData?.session) {
      throw new Error('Sessão expirada. Faça login novamente para enviar e-mails.');
    }
    session = refreshedData.session;
  }

  // Buscar todos os emails cadastrados na newsletter
  const { data: subscribers, error: fetchError } = await client
    .from('newsletter_subscribers')
    .select('email');

  if (fetchError) {
    console.error('Erro ao buscar inscritos:', fetchError);
    throw new Error('Erro ao buscar lista de emails');
  }

  if (!subscribers || subscribers.length === 0) {
    throw new Error('Nenhum email cadastrado na newsletter');
  }

  const emails = subscribers.map((s) => s.email);
  const html = message.replace(/\n/g, '<br>');
  const results = [];

  for (const email of emails) {
    try {
      const { data, error } = await client.functions.invoke('send-email', {
        body: {
          to: email,
          subject,
          html
        }
      });

      if (error) {
        const result = data ?? error;
        console.error(`Erro ao enviar para ${email}:`, result);
        results.push({
          email,
          success: false,
          error: result?.error || result?.message || 'Erro desconhecido'
        });
      } else {
        results.push({ email, success: true });
      }
    } catch (err) {
      let errorMessage = err?.message || 'Erro desconhecido';
      if (err?.name === 'FunctionsHttpError' && err.context) {
        try {
          const errorBody = await err.context.json();
          errorMessage = errorBody?.error || errorBody?.message || errorMessage;
        } catch {
          try {
            const errorText = await err.context.text();
            if (errorText) errorMessage = errorText;
          } catch {
            // sem corpo de resposta parseável
          }
        }
      }

      console.error(`Erro ao enviar para ${email}:`, err);
      results.push({ email, success: false, error: errorMessage });
    }
  }

  const successful = results.filter((r) => r.success).length;
  const failed = results.filter((r) => !r.success).length;

  return {
    total: emails.length,
    successful,
    failed,
    results
  };
}
