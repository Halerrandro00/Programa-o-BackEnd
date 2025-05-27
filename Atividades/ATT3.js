//1 Função buscar Dados Do Servidor

/*/function buscarDadosDoServidor() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ status: 200, dados: "OK" });
    }, 2000);
  });
}

async function testarBuscarDados() {
  const dados = await buscarDadosDoServidor();
  console.log(dados);
}

testarBuscarDados();

2 Função validar Idade

function validarIdade(idade) {
  return new Promise((resolve, reject) => {
    if (idade >= 18) {
      resolve("Acesso permitido");
    } else {
      reject("Acesso negado");
    }
  });
}

async function testarValidarIdade() {
  try {
    const mensagem = await validarIdade(20);
    console.log(mensagem); // Acesso permitido
  } catch (erro) {
    console.log(erro); // Acesso negado
  }

  try {
    const mensagem = await validarIdade(16);
    console.log(mensagem); // Acesso negado
  } catch (erro) {
    console.log(erro); // Acesso negado
  }
}

testarValidarIdade();


3 Funções baixar Imagem e baixarVideo e baixarMidias

function baixarImagem() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Imagem baixada");
    }, 2000);
  });
}

function baixarVideo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Vídeo baixado");
    }, 3000);
  });
}

async function baixarMidias() {
  const [imagem, video] = await Promise.all([baixarImagem(), baixarVideo()]);
  console.log(imagem);
  console.log(video);
}

baixarMidias();

4 Função fazer Login

function fazerLogin(usuario, senha) {
  return new Promise((resolve, reject) => {
    if (usuario === 'admin' && senha === '1234') {
      resolve("Login bem-sucedido");
    } else {
      reject("Credenciais inválidas");
    }
  });
}

async function testarLogin() {
  try {
    const resultado = await fazerLogin('admin', '1234');
    console.log(resultado); // Login bem-sucedido
  } catch (erro) {
    console.log(erro); // Credenciais inválidas
  }
}

testarLogin();

5 Funções getUsuario e getPedidos e mostrarPedidos


function getUsuario() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 5, nome: 'João' });
    }, 1000);
  });
}

function getPedidos(idUsuario) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{ id: 1, produto: 'Produto A' }, { id: 2, produto: 'Produto B' }]);
    }, 1500);
  });
}

async function mostrarPedidos() {
  const usuario = await getUsuario();
  const pedidos = await getPedidos(usuario.id);
  console.log(`Usuário: ${usuario.nome}`);
  console.log('Pedidos:', pedidos);
}

mostrarPedidos();

6 Função contar Ate

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function contarAte(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(i);
    await delay(1000); // Espera 1 segundo
  }
}

contarAte(5);

7 Função buscar Com Time out

function buscarComTimeout() {
  const promessaBusca = new Promise(resolve => {
    setTimeout(() => {
      resolve("Dados encontrados");
    }, 2000);
  });

  const promessaTimeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Tempo esgotado");
    }, 1000);
  });

  return Promise.race([promessaBusca, promessaTimeout]);
}

async function testarBuscarComTimeout() {
  try {
    const resultado = await buscarComTimeout();
    console.log(resultado); // Dados encontrados ou Tempo esgotado
  } catch (erro) {
    console.log(erro); // Tempo esgotado
  }
}

testarBuscarComTimeout();


8 Função verificar Resultados

function promessaResolve() {
  return new Promise(resolve => setTimeout(() => resolve("Resolvido"), 1000));
}

function promessaRejeita() {
  return new Promise((_, reject) => setTimeout(() => reject("Rejeitado"), 2000));
}

function promessaResolveRapida() {
  return new Promise(resolve => setTimeout(() => resolve("Resolvido rápido"), 500));
}

async function verificarResultados() {
  const resultados = await Promise.allSettled([promessaResolve(), promessaRejeita(), promessaResolveRapida()]);
  console.log(resultados);
}

verificarResultados();

/*/
