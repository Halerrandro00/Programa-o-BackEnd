const questions = [
"Qual é a capital do Brasil?",
  "Quanto é 2 + 2?",
  "Qual linguagem estamos usando agora?",
  "O que significa HTML?"
];

export function* quizGenerator() {
  for (const question of questions) {
    yield question;
  }
}