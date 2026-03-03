import { Resend } from 'resend';

const resendApiKey = import.meta.env.VITE_RESEND_API_KEY;

let resend = null;

if (resendApiKey) {
  resend = new Resend(resendApiKey);
}

export async function sendNewsletterEmail(emails, subject, message) {
  if (!resend) {
    throw new Error('Resend nao configurado');
  }

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Instituto de Transformacao Social</h1>
      </div>
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #0d9488; margin-top: 0;">${subject}</h2>
        <div style="color: #4a5568; white-space: pre-wrap;">${message}</div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #718096; font-size: 12px;">
          <p>Você está recebendo este email porque se inscreveu em nossa newsletter.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const recipients = emails.map(email => ({ email }));

  try {
    const data = await resend.emails.send({
      from: 'Instituto <onboarding@resend.dev>', 
      to: recipients,
      subject: subject,
      html: emailHtml,
    });

    return data;
  } catch (error) {
    console.error('Resend error:', error);
    throw error;
  }
}
