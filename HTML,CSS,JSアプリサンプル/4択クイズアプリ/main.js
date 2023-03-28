/*-----------*/
// データ置き場
/*-----------*/
let currentQuizIndex = 0;
const quizData = [
  {
    question: "question1",
    options: ["answer1", "answer2", "answer3", "answer4"],
    answerIndex: 0,
  },
  {
    question: "question2",
    options: ["answer1", "answer2", "answer3", "answer4"],
    answerIndex: 2,
  },
];
const correctQuizIndex = [];

/*-----------*/
// DOM
/*-----------*/
const question = document.getElementById("question");
const optionArea = document.getElementById("optionArea");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const nextButton = document.getElementById("nextButton");
const reloadButton = document.getElementById("reloadButton");

/*-----------*/
// 関数
/*-----------*/
function doAnswer(answerIndex) {
  const currentQuiz = quizData[currentQuizIndex];

  if (currentQuiz.answerIndex === answerIndex) {
    correctQuizIndex.push(currentQuizIndex);
    correct.classList.remove("hidden");
  } else {
    incorrect.classList.remove("hidden");
  }
  nextButton.classList.remove("hidden");

  currentQuizIndex++;
}

function onOptionClick(index) {
  console.log("clicked", index);
  doAnswer(index);
}

function generateOptionTag(optionText, optionIndex) {
  const button = document.createElement("button");
  button.innerText = optionText;
  button.classList.add("option-button");
  button.onclick = function () {
    onOptionClick(optionIndex);
  };

  return button;
}

function showCurrentQuiz() {
  const currentQuiz = quizData[currentQuizIndex];

  if (!currentQuiz) return;

  question.innerText = currentQuiz.question;

  optionArea.innerHTML = "";
  for (let i = 0; i < currentQuiz.options.length; i++) {
    const option = generateOptionTag(currentQuiz.options[i], i);
    optionArea.appendChild(option);
  }
}

function nextQuestion() {
  correct.classList.add("hidden");
  incorrect.classList.add("hidden");
  if (currentQuizIndex < quizData.length) {
    showCurrentQuiz();
  } else {
    question.innerText = "おわり！";
    optionArea.classList.add("hidden");
    reloadButton.classList.remove("hidden");
  }
  nextButton.classList.add("hidden");
}

function reload() {
  window.location.reload();
}

/*-----------*/
// イベントリスナー
/*-----------*/
nextButton.onclick = nextQuestion;
reloadButton.onclick = reload;

/*-----------*/
// 初期処理
/*-----------*/
showCurrentQuiz();
