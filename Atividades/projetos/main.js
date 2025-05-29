import { quizGenerator } from './quizModule.js';

const quiz = quizGenerator();

for (const question of quiz) {
  console.log("Pergunta:", question);
}