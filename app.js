let currentQuestion;
let answerHistory = [];
let questionProbabilities = {};
let isAnswered = false;
let incorrectAnswers = [];

function getRandomQuestion() {
  const totalProbability = Object.values(questionProbabilities).reduce((total, prob) => total + prob, 0);
  let randomValue = Math.random() * totalProbability;

  for (const [question, probability] of Object.entries(questionProbabilities)) {
    randomValue -= probability;
    if (randomValue <= 0) {
      return question;
    }
  }
}

function renderQuestion() {
  isAnswered = false;
  currentQuestion = getRandomQuestion();
  const question = questions[currentQuestion];
  document.getElementById("question").innerHTML = question.sentence;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  for (const option of question.options) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-outline-primary";
    button.textContent = option;
    button.addEventListener("click", (event) => checkAnswer(event, option));
    optionsDiv.appendChild(button);
  }
}

function checkAnswer(event, answer) {
  event.preventDefault(); // Prevent the default button behavior

  if (isAnswered) {
    return;
  } else {
    isAnswered = true;
  }

  const question = questions[currentQuestion];
  const isCorrect = answer === question.answer;
  answerHistory.push(isCorrect);

  if (answerHistory.length > 50) {
    answerHistory.shift();
  }

  if (!isCorrect) {
    const incorrectAnswer = {
      question: question.sentence,
      answer: answer,
      time: new Date().toLocaleString()
    };
    incorrectAnswers.push(incorrectAnswer);
  }

  updateProbability(isCorrect);
  renderFeedback(isCorrect, answer);
  document.getElementById("next").classList.remove("d-none");
}

function updateProbability(isCorrect) {
  const currentProbability = questionProbabilities[currentQuestion] || 1;

  if (isCorrect) {
    questionProbabilities[currentQuestion] = Math.max(currentProbability * 0.9, 0.1);
  } else {
    questionProbabilities[currentQuestion] = Math.min(currentProbability * 1.5, 5);
  }
}

function renderFeedback(isCorrect, answer) {
  const optionsDiv = document.getElementById("options");
  const buttons = optionsDiv.querySelectorAll("button");

  buttons.forEach((button) => {
    button.classList.remove("btn-success", "btn-danger");
    if (button.textContent === questions[currentQuestion].answer) {
      button.classList.add("btn-success");
    } else if (button.textContent === answer && !isCorrect) {
      button.classList.add("btn-danger");
    }
  });

  const feedbackDiv = document.getElementById("feedback");
  feedbackDiv.innerHTML = "";

  const badgeContainer = document.createElement("div");
  badgeContainer.classList.add("d-flex", "flex-wrap");

  for (let i = 0; i < answerHistory.length; i += 10) {
    const row = document.createElement("div");
    row.classList.add("d-flex", "mb-2");

    for (let j = 0; j < 10 && i + j < answerHistory.length; j++) {
      const badge = document.createElement("span");
      badge.className = `badge ${answerHistory[i + j] ? "badge-success" : "badge-danger"} mr-2`;
      badge.textContent = "●";
      row.appendChild(badge);
    }

    badgeContainer.appendChild(row);
  }

  feedbackDiv.appendChild(badgeContainer);

  const correctAnswers = answerHistory.filter((result) => result).length;
  const totalAnswers = Math.min(answerHistory.length, 50);
  const scoreDiv = document.createElement("div");
  scoreDiv.textContent = `${correctAnswers}/${totalAnswers}`;
  feedbackDiv.appendChild(scoreDiv);
}

function initializeState() {
  const storedState = localStorage.getItem("appState");
  if (storedState) {
    const { answerHistory: storedAnswerHistory, questionProbabilities: storedQuestionProbabilities, incorrectAnswers: storedIncorrectAnswers } = JSON.parse(storedState);
    answerHistory = storedAnswerHistory;
    questionProbabilities = storedQuestionProbabilities;
    incorrectAnswers = storedIncorrectAnswers;
  } else {
    for (let i = 0; i < questions.length; i++) {
      questionProbabilities[i] = 1;
    }
  }
}

function saveState() {
  const appState = {
    answerHistory,
    questionProbabilities,
    incorrectAnswers,
  };
  localStorage.setItem("appState", JSON.stringify(appState));
}

initializeState();
renderQuestion();

document.getElementById("next").addEventListener("click", () => {
  saveState();
  renderQuestion();
  document.getElementById("next").classList.add("d-none");
});