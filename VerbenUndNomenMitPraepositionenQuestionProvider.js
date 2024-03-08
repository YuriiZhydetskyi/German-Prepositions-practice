define([
  './QuestionsProvider',
  './VerbenUndNomenMitPraepositionenQuestion',
  './VerbenUndNomenMitPraepositionenQuestions'
], function(QuestionsProvider, VerbenUndNomenMitPraepositionenQuestion, questions) {
  class VerbenUndNomenMitPraepositionenQuestionProvider extends QuestionsProvider {
    constructor(userProgressManager) {
      super();
      this.userProgressManager = userProgressManager;
      this.loadQuestions();
    }

    loadQuestions() {
      questions.forEach(question => {
        const { sentence, options, answer } = question;
        const newQuestion = new VerbenUndNomenMitPraepositionenQuestion(sentence, options, answer);
        this.addQuestion(newQuestion);
      });
    }

    getNextQuestion() {
      const questionProbabilities = this.userProgressManager.getQuestionProbabilities();
      const totalProbability = Object.values(questionProbabilities).reduce((sum, probability) => sum + probability, 0);
      let randomValue = Math.random() * totalProbability;

      const initialIndex = this.currentQuestionIndex;
      while (true) {
        const question = this.questionList[this.currentQuestionIndex];
        const probability = questionProbabilities[question.sentence] || 1;
        randomValue -= probability;

        if (randomValue <= 0) {
          break;
        }

        this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.questionList.length;

        if (this.currentQuestionIndex === initialIndex) {
          // If we have cycled through all questions, break the loop
          break;
        }
      }

      const nextQuestion = this.questionList[this.currentQuestionIndex];
      this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.questionList.length;
      return nextQuestion;
    }
  }

  return VerbenUndNomenMitPraepositionenQuestionProvider;
});