const quizContainer = document.getElementById(quiz);
const resultscontainer = document.getElementById(results);
const submitbutton = document.getElementById(submit);

function buildingQuiz() {}
function showResults() {}

buildingQuiz();

submitbutton.addEventListener("click", showResults);

const Questions = [
  {
    Questions: "what does HTML stand for?",
    answers: {
      a: "",
      b: "",
      c: "",
    },
    correctAnswer: "a",
  },

  {
    Question: "which one is a boolean",
    answers: {
      a: "",
      b: "",
      c: "",
    },
    correctAnswer: "c",
  },
];
