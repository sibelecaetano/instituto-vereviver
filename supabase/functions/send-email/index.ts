import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

declare const Deno: {
  serve: (handler: (req: Request) => Response | Promise<Response>) => void;
  env: {
    get: (name: string) => string | undefined;
  };
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

type SendEmailPayload = {
  to?: string;
  subject?: string;
  html?: string;
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });
  }

  try {
    const brevoApiKey = Deno.env.get('BREVO_API_KEY');
    const fromEmail = Deno.env.get('BREVO_FROM_EMAIL');
    const fromName = Deno.env.get('BREVO_FROM_NAME') ?? 'Ver&Viver';

    if (!brevoApiKey) {
      return new Response(JSON.stringify({ error: 'Missing BREVO_API_KEY secret' }), {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      });
    }

    const payload = (await req.json()) as SendEmailPayload;
    const to = payload?.to?.trim();
    const subject = payload?.subject?.trim();
    const html = payload?.html?.trim();

    if (!to || !subject || !html) {
      return new Response(JSON.stringify({ error: 'Missing required fields: to, subject, html' }), {
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      });
    }

    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': brevoApiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: fromName,
          email: fromEmail
        },
        to: [{ email: to }],
        subject,
        htmlContent: html
      })
    });

    const brevoRaw = await brevoResponse.text();
    let brevoJson: Record<string, unknown> | null = null;

    try {
      brevoJson = brevoRaw ? JSON.parse(brevoRaw) : null;
    } catch {
      brevoJson = null;
    }

    if (!brevoResponse.ok) {
      return new Response(
        JSON.stringify({
          error: 'Brevo request failed',
          details: brevoJson ?? brevoRaw
        }),
        {
          status: brevoResponse.status,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          }
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: brevoJson?.messageId ?? null }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Unexpected error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );
  }
});
