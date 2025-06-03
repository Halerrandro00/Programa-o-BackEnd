const http = require('http');

const servidor = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Bem-vindo ao meu servidor!');
  }
  else if (req.url === '/contato') {
    res.statusCode = 200;
    res.end('Página de Contato');
  }

  else if (req.url === '/servicos') {
    res.statusCode = 200;
    res.end('Nossos serviços estão em construção.');
  }

  else {
    res.statusCode = 404;
    res.end('Página não encontrada.');
  }
});

const PORTA = 3000;
servidor.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}/`);
});
