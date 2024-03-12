define([
  'TopicSelector',
  './UserProgressManager',
  './DataPersistence',
  './renderService',
  './config',
  'topicConfig',
  'UserConfigs',
  './userMenu/UserMenu',
], function (TopicSelector, UserProgressManager, DataPersistence, renderService, config, topicConfig, UserConfigs, UserMenu) {
  const userProgressManager = new UserProgressManager();
  const dataPersistence = new DataPersistence();
  const topicSelector = new TopicSelector(topicConfig);

  let questionsProvider;
  let currentQuestion;
  let isAnswered = false;

  function initializeState() {
    const savedLastBreakingChangesDate = dataPersistence.getLastBreakingChangesDate();
    const configLastBreakingChangesDate = config.lastBreakingChangesDate;

    if (savedLastBreakingChangesDate !== configLastBreakingChangesDate) {
      dataPersistence.resetData();
      dataPersistence.setLastBreakingChangesDate(configLastBreakingChangesDate);
    }

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

    if (event.isTrusted === false && event.currentTarget.hasAttribute('data-simulated')) {
      event.currentTarget.removeAttribute('data-simulated');
      return;
    }

    event.currentTarget.setAttribute('data-simulated', 'true');
    event.currentTarget.click();

    if (isAnswered) {
      return;
    } else {
      isAnswered = true;
    }

    const isCorrect = questionsProvider.checkAnswer(currentQuestion, answer);
    userProgressManager.recordAnswer(currentQuestion, isCorrect);

    renderService.renderFeedback(isCorrect, answer, currentQuestion, userProgressManager.getAnswerHistoryByTopic(currentQuestion.topic));
    document.getElementById("next").classList.remove("d-none");
  }

  function handleNextQuestion() {
    saveState();
    currentQuestion = questionsProvider.getNextQuestion();
    renderService.renderQuestion(currentQuestion, handleAnswerSelection);
    document.getElementById("next").classList.add("d-none");
    isAnswered = false;
  }

  function handleTopicChange(event) {
    const selectedTopic = event.detail;
    const questionProviderModule = topicSelector.getQuestionProviderModule();

    requirejs([questionProviderModule], function (QuestionProvider) {
      isAnswered = false;
      questionsProvider = new QuestionProvider(userProgressManager);
      currentQuestion = questionsProvider.getNextQuestion();
      renderService.renderQuestion(currentQuestion, handleAnswerSelection);
    });

    // Update the title
    const topicText = topicConfig[selectedTopic].text;
    document.getElementById("topic-title").textContent = topicText;

    let nextButton = document.getElementById("next");
    if (!nextButton.classList.contains("d-none")) {
      nextButton.click();
    }
  }

  function startApp() {
    try {
      const userConfigs = new UserConfigs();
      userConfigs.loadConfigs();

      const userMenu = new UserMenu(userConfigs, topicConfig);
      userMenu.renderMenu();

      initializeState();

      const selectedTopic = topicSelector.getSelectedTopic();
      const topicText = topicConfig[selectedTopic].text;
      document.getElementById("topic-title").textContent = topicText;

      const questionProviderModule = topicSelector.getQuestionProviderModule();

      requirejs([questionProviderModule], function (QuestionProvider) {
        questionsProvider = new QuestionProvider(userProgressManager);
        currentQuestion = questionsProvider.getNextQuestion();
        renderService.renderQuestion(currentQuestion, handleAnswerSelection);
      });

      document.addEventListener('topicChange', handleTopicChange);
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error appropriately, e.g., display an error message to the user
    }
  }

  document.getElementById("next").addEventListener("click", handleNextQuestion);

  startApp();

});