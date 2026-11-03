import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Serve static assets from Vite build output if directory exists
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// Serve public assets if available
const publicPath = path.join(__dirname, 'public');
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
}

// Health check endpoint for Cloud Run container lifecycle (handles GET, HEAD)
app.all(['/healthz', '/api/health', '/_ah/health'], (_req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
});

// SPA fallback: Route all other requests to dist/index.html with error safety
app.get('*', (_req, res) => {
  const distIndex = path.join(distPath, 'index.html');
  if (fs.existsSync(distIndex)) {
    return res.sendFile(distIndex);
  }
  const rootIndex = path.join(__dirname, 'index.html');
  if (fs.existsSync(rootIndex)) {
    return res.sendFile(rootIndex);
  }
  return res.status(200).send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Syllora - Academic Resources</title>
  </head>
  <body>
    <div id="root">Syllora is loading...</div>
  </body>
</html>`);
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Syllora production server running on http://0.0.0.0:${PORT}`);
});

// Graceful shutdown for Cloud Run container revision updates
const shutdown = (signal: string) => {
  console.log(`Received ${signal}. Gracefully shutting down...`);
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

export default app;
