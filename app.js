define([
  './TopicSelector',
  './VerbenUndNomenMitPraepositionenQuestionProvider',
  './UserProgressManager',
  './DataPersistence',
  './renderService',
  './config'
], function(TopicSelector, VerbenUndNomenMitPraepositionenQuestionProvider, UserProgressManager, DataPersistence, renderService, config) {

  const userProgressManager = new UserProgressManager();
  const dataPersistence = new DataPersistence();
  const topicSelector = new TopicSelector(['Verben und Nomen mit Praepositionen']);

  let questionsProvider;
  let currentQuestion;
  let isAnswered = false;

  function initializeState() {
    const savedProgress = dataPersistence.loadData();
    if (savedProgress) {
      userProgressManager.answerHistory = savedProgress.answerHistory;
      userProgressManager.questionProbabilities = savedProgress.questionProbabilities;
      userProgressManager.incorrectAnswers = savedProgress.incorrectAnswers;
    }
  }

  function saveState() {
    const progressData = {
      answerHistory: userProgressManager.getAnswerHistory(),
      questionProbabilities: userProgressManager.getQuestionProbabilities(),
      incorrectAnswers: userProgressManager.getIncorrectAnswers(),
    };
    dataPersistence.saveData(progressData);
  }

  function handleAnswerSelection(event, answer) {
    event.preventDefault();

    if (isAnswered) {
      return;
    } else {
      isAnswered = true;
    }

    const isCorrect = questionsProvider.checkAnswer(currentQuestion, answer);
    userProgressManager.recordAnswer(currentQuestion, isCorrect);

    renderService.renderFeedback(isCorrect, answer, currentQuestion, userProgressManager.getAnswerHistory());
    document.getElementById("next").classList.remove("d-none");
  }

  function handleNextQuestion() {
    saveState();
    currentQuestion = questionsProvider.getNextQuestion();
    renderService.renderQuestion(currentQuestion, handleAnswerSelection);
    document.getElementById("next").classList.add("d-none");
    isAnswered = false;
  }
  
  function startApp() {
    try {
      initializeState();
  
      topicSelector.renderTopicSelector();
  
      const selectedTopic = topicSelector.getSelectedTopic();
      if (selectedTopic === 'Verben und Nomen mit Praepositionen') {
        questionsProvider = new VerbenUndNomenMitPraepositionenQuestionProvider(userProgressManager);
        currentQuestion = questionsProvider.getNextQuestion();
        renderService.renderQuestion(currentQuestion, handleAnswerSelection);
      } else {
        // Handle case when no topic is selected or an unknown topic is selected
        console.error('Invalid topic selected:', selectedTopic);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error appropriately, e.g., display an error message to the user
    }
  }

  document.getElementById("next").addEventListener("click", handleNextQuestion);

  startApp();

});