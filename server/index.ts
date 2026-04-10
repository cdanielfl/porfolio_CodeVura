import 'dotenv/config';
import express from 'express';

const app = express();

const PORT = Number(process.env.SERVER_PORT ?? 3001);
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? 'http://localhost:3000';
const CONTACT_WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL;
const CONTACT_WEBHOOK_TOKEN = process.env.CONTACT_WEBHOOK_TOKEN;

app.use(express.json({ limit: '1mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', CORS_ORIGIN);
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  return next();
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ ok: true, service: 'codevura-server' });
});

app.post('/api/contact', async (req, res) => {
  const { fullName, email, message } = req.body ?? {};

  const fullNameSafe = typeof fullName === 'string' ? fullName.trim() : '';
  const emailSafe = typeof email === 'string' ? email.trim() : '';
  const messageSafe = typeof message === 'string' ? message.trim() : '';

  if (fullNameSafe.length < 3 || emailSafe.length < 5 || messageSafe.length < 10) {
    return res.status(400).json({ error: 'Dados inválidos.' });
  }

  if (!CONTACT_WEBHOOK_URL) {
    console.info('[contact] Novo contato recebido (modo local sem webhook).');
    return res.status(202).json({ ok: true });
  }

  try {
    const webhookResponse = await fetch(CONTACT_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(CONTACT_WEBHOOK_TOKEN ? { Authorization: `Bearer ${CONTACT_WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify({
        fullName: fullNameSafe,
        email: emailSafe,
        message: messageSafe,
        source: 'codevura-portfolio',
      }),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook retornou status ${webhookResponse.status}`);
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('[contact] Falha ao enviar para webhook:', error);
    return res.status(502).json({ error: 'Falha ao processar contato.' });
  }
});

app.listen(PORT, () => {
  console.log(`[server] API online em http://localhost:${PORT}/api`);
});
