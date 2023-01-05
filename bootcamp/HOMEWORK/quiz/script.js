// all variables im gonna be using

const penaltyTime = 10;
let score = 0;
// let startingSec=60;

const startBtn = document.getElementById("startbtn");
const countdown = document.getElementById("countdown");
const highscores = document.getElementById("highscores");
const quiz = document.getElementById("quiz");
const correctAnswer = document.getElementById("");

let question = document.getElementById("title");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let time = 60;
let timerId;
let index = 0;
// list of all questions, choices, and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

//making first function that will take all the questions in the question array
function displayQuestion() {
  question.textContent = questions[index].title;
  //   question.innerHTML = questions[number].title
  //   answer1.innerHTML = questions[number].choices[0]
  //   answer2.innerHTML = questions[number].choices[1]
  //   answer3.innerHTML = questions[number].choices[2]
  //   answer4.innerHTML = questions[number].choices[3]
}

var introEl = document.getElementById("intro");

//function for start button
function startQuiz() {
  introEl.setAttribute("class", "hide");
  quiz.removeAttribute("class");
  timerId = setInterval(clock, 1000);
  countdown.textContent = time;
  displayQuestion();
}

function clock() {
  time--;
  countdown.textContent = time;
  if (time <= 0) {
    // endGame()
    console.log("Game over");
  }
}

startBtn.addEventListener("click", startQuiz());

// diplaying blocks of questions one by one
