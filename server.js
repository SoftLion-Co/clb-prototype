const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const targetUrl = 'https://wp.cl-brokers.com';

// Serve the Excel file securely
app.use('/wp-content/uploads', (req, res, next) => {
  // Modify the request URL to use HTTPS
  req.url = req.url.replace(/^\/wp-content\/uploads/, '');
  createProxyMiddleware({ 
    target: targetUrl,
    changeOrigin: true,
    secure: false,
    onProxyRes: (proxyRes, req, res) => {
      console.log('Proxy Response:', proxyRes.statusCode);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    },
  })(req, res, next);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Proxy server is running at http://localhost:${port}`);
});
