// arquivo: index.js (ou app.js)

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rota ping para manter o backend ativo
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Rota para gerar Pix (exemplo, você pode expandir)
app.get('/gerarPix', (req, res) => {
  // Aqui você gera o BR Code Pix e retorna o texto para o plugin
  res.json({ pixCode: '000201...' }); // exemplo
});

// Iniciar servidor HTTP
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
