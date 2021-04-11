const questions = [
  {
    question: "what does HTML stand for?",
    answers: [
      "Hypertext Markup Language",
      "Hightext Markup length",
      "Hype Mix Language",
    ],
    correctAnswer: "Hypertext Markup Language",
  },

  {
    question: "what is an array",
    answers: [
      "string of letters",
      "A type of Boolean",
      "Ordered list of Values",
    ],
    correctAnswer: "Ordered list of Values",
  },

  {
    question: "which tag defines a hyperlink? ",
    answers: ["<b>", "<a>", "<p>"],

    correctAnswer: "<a>",
  },
];

var time = questions.length * 10;
var questionIndex = 0;
var startButton = document.getElementById("start");
var quizContainer = document.getElementById("quiz");
var endScreen = document.getElementById("end-screen");
var submitButton = document.getElementById("submit");
var timerEl = document.getElementById("time");
var answerContainer = document.getElementById("choices");

function startQuiz() {
  timeleft = 10;
  var startScreen = document.getElementById("start-screen");
  startScreen.setAttribute("class", "hide");
  quizContainer.removeAttribute("class");

  renderQuestions();
}

function renderQuestions() {
  var currentQuestion = questions[questionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.question;

  answerContainer.innerHTML = "";
  currentQuestion.answers.forEach(function (answer) {
    var answerButton = document.createElement("button");
    answerButton.setAttribute("class", "answer");
    answerButton.setAttribute("value", answer);
    answerButton.textContent = answer;
    // answerButton.onclick = answerClick;
    answerContainer.appendChild(answerButton);
  });
}

//
function checkAnswer(selectedAnswer) {
  var correctAnswer = questions[questionIndex].correctAnswer;
  if (selectedAnswer === correctAnswer) {
    // Handle logic to correct answer here
  } else {
    // Handle logic to wrong answer here
  }
}

//
function handleAnswers() {
  if (event.target.matches(".answer")) {
    var selectedAnswer = event.target.getAttribute("value");
    checkAnswer(selectedAnswer);

    if (questionIndex < 3) {
      questionIndex++;
      renderQuestions();
    }
  }
}

var Timer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(Timer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML =
      timeleft + " seconds remaining";
  }

  timeleft -= 1;
}, 1000);

// event listner
answerContainer.addEventListener("click", handleAnswers);

startButton.onclick = startQuiz;
