//1. Arrow function

const contarPares = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

/*/2. Desestruturação do objeto

const livro = {
  titulo: "JavaScript Essencial",
  autor: "Alana Souza",
  ano: 2024,
  sinopse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  editora: "Mundo Dev"
};

const { titulo, ano } = livro;
console.log(titulo); // "JavaScript Essencial"
console.log(ano); // 2024

//3. Adicionar frutas usando o operador spread

const frutas = ["maçã", "banana"];
const novasFrutas = ["laranja", "abacaxi"];
const todasAsFrutas = [...frutas, ...novasFrutas];
console.log(todasAsFrutas); // ["maçã", "banana", "laranja", "abacaxi"]

//4. Arrow function verificarAcesso

const verificarAcesso = (idade, temIngresso) => {
  if (idade >= 18 && temIngresso) {
    console.log("Acesso permitido");
  } else {
    console.log("Acesso negado");
  }
};

//5. Arrow function exibirAviso

const exibirAviso = (estaChovendo, semGuardaChuva) => {
  if (estaChovendo || semGuardaChuva) {
    console.log("Leve um guarda-chuva!");
  } else {
    console.log("Tudo certo, pode sair tranquilo");
  }
}
*/