const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const targetUrl = 'https://wp.cl-brokers.com';

  app.use('/', (req, res, next) => {
    console.log('Requested URL:', req.url);
    createProxyMiddleware({ 
      target: targetUrl,
      changeOrigin: true,
      onProxyRes: (proxyRes, req, res) => {
        console.log('Proxy Response:', proxyRes.statusCode);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      },
    })(req, res, next);
  });

const port = 3001; // Виберіть порт, на якому буде працювати ваш сервер
app.listen(port, () => {
  console.log(`Proxy server is running at http://localhost:${port}`);
});
