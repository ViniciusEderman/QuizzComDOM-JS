// var's:
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];

let points = 0;
let actualQuestion = 0;


// Questions:
const questions = [
    {
      "question": "Qual o comando para baixar o express no seu projeto?",
      "answers": [
        {
          "answer": "npm i express",
          "correct": true
        },
        {
          "answer": "npm init",
          "correct": false
        },
        {
          "answer": "npm start express",
          "correct": false
        },
        {
          "answer": "install express.node",
          "correct": false
        },
      ]
    },
    {
      "question": "Uma forma de declarar variável em JavaScript:",
      "answers": [
        {
          "answer": "$var",
          "correct": false
        },
        {
          "answer": "var",
          "correct": true
        },
        {
          "answer": "@var",
          "correct": false
        },
        {
          "answer": "#let",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual o seletor de id no CSS?",
      "answers": [
        {
          "answer": "#",
          "correct": true
        },
        {
          "answer": ".",
          "correct": false
        },
        {
          "answer": "@",
          "correct": false
        },
        {
          "answer": "/",
          "correct": false
        },
      ]
    },
  ]

function init() {
    // criar a primeira pergunta
    createQuestion(0);
}
  
  // Cria uma pergunta
function createQuestion(i) {
    // Limpar a questão anterior
    const oldButtons = answersBox.querySelectorAll("button");
    oldButtons.forEach(function(btn) {
        btn.remove();
    });
    // Alterar o texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");
    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;
}

init();