// server.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var PORT = Number(process.env.PORT) || 3e3;
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.get(["/healthz", "/api/health"], (_req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
var server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Syllora production server running on http://0.0.0.0:${PORT}`);
});
var shutdown = (signal) => {
  console.log(`Received ${signal}. Gracefully shutting down...`);
  server.close(() => {
    console.log("HTTP server closed.");
    process.exit(0);
  });
};
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
var server_default = app;
export {
  server_default as default
};
