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
    {
      "question": "Qual a linguagem predominante no Youtube?",
      "answers": [
        {
          "answer": "JavaScript",
          "correct": true
        },
        {
          "answer": "C#",
          "correct": false
        },
        {
          "answer": "Python",
          "correct": false
        },
        {
          "answer": "Java",
          "correct": false
        },
      ]
    }
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

    questions[i].answers.forEach(function(answer, i) {
      //template do botão(quizz)
      const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
      const letterBtn = answerTemplate.querySelector(".btn-letter");
      const answerText = answerTemplate.querySelector(".question-answer");

      letterBtn.textContent = letters[i];
      answerText.textContent = answer['answer'];
      answerTemplate.setAttribute("correct-answer", answer["correct"]);

      // removendo hide e template class
      answerTemplate.classList.remove("hide");
      answerTemplate.classList.remove("answer-template");

      // inserir a alternativa na tela:
      answersBox.appendChild(answerTemplate);

      // evento de click no buttom:
      answerTemplate.addEventListener("click", function() {
        checkAnswer(this);
      });
    });

    //incrementar o número das questões:
    actualQuestion++;
}

// Verificando a resposta do usuário:
function checkAnswer(btn) {
  const buttons = answersBox.querySelectorAll("button");

  buttons.forEach((button) => {
    if(button.getAttribute("correct-answer") === "true") {
      button.classList.add("correct-answer");
      if(btn === button) {
        points++;
      }
    }
    else {
      button.classList.add("wrong-answer");
    }
  });
  nextQuestion();
}

function nextQuestion() {
  setTimeout(() => {
    if(actualQuestion >= questions.length) {
      showSuccessMessage();
      return;
    }
    createQuestion(actualQuestion);
  }, 700);
}

// exibe a tela final:
function showSuccessMessage() {
  hideOrShowQuizz();

  //manipulando o score(depende de quantas questões forem acertadas):
  const score = ((points / questions.length) * 100).toFixed(2);
  const displayScore = document.querySelector("#display-score span");

  displayScore.textContent = score.toString();

  // numero de perguntas corretas:
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  // alterar o total de perguntas:
  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = question.length;
}

function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

// Restartar o jogo:
const restartGame = document.querySelector("#restart");
restartGame.addEventListener("click", function() {
  actualQuestion = 0; // zerando as questões
  points = 0; // zerando os pontos
  hideOrShowQuizz();
  init(); // recomeçando o jogo
});

init();
