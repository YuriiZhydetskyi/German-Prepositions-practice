let currentQuestion;
let answerHistory = [];
let questionProbabilities = {};
let incorrectAnswers = [];

const config = {
  badgesPerRow: 10,
  maxAnswersTracked: 50,
};

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

function handleAnswerSelection(event, answer) {
  event.preventDefault();

  if (isAnswered) {
    return;
  } else {
    isAnswered = true;
  }

  const isCorrect = questionService.checkAnswer(currentQuestion, answer);
  answerHistory.push(isCorrect);

  if (answerHistory.length > config.maxAnswersTracked) {
    answerHistory.shift();
  }

  if (!isCorrect) {
    incorrectAnswers.push(questionService.getIncorrectAnswer(currentQuestion, answer));
  }

  questionService.updateProbability(currentQuestion, isCorrect);
  renderService.renderFeedback(isCorrect, answer);
  document.getElementById("next").classList.remove("d-none");
}

function handleNextQuestion() {
  saveState();
  currentQuestion = questionService.getRandomQuestion();
  renderService.renderQuestion(currentQuestion);
  document.getElementById("next").classList.add("d-none");
}

initializeState();
currentQuestion = questionService.getRandomQuestion();
renderService.renderQuestion(currentQuestion);

document.getElementById("next").addEventListener("click", handleNextQuestion);