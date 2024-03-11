define([
  'QuestionsProvider',
  './Question',
  './Questions'
], function(QuestionsProvider, VerbenUndNomenMitPraepositionenQuestion, questions) {
  class VerbenUndNomenMitPraepositionenQuestionProvider extends QuestionsProvider {
    constructor(userProgressManager) {
      super();
      this.topic = 'VerbenUndNomenMitPraepositionen';
      this.userProgressManager = userProgressManager;
      this.loadQuestions();
    }

    loadQuestions() {
      questions.forEach(question => {
        const { id, topic, sentence, options, answer } = question;
        const newQuestion = new VerbenUndNomenMitPraepositionenQuestion(id, this.topic, sentence, options, answer);
        this.addQuestion(newQuestion);
      });
    }

    getNextQuestion() {
      const questionProbabilities = this.questionList.map(question =>
        this.userProgressManager.getQuestionProbability(question.topic, question.id)
      );
      const totalProbability = questionProbabilities.reduce((sum, probability) => sum + probability, 0);
      let randomValue = Math.random() * totalProbability;
    
      for (let i = 0; i < this.questionList.length; i++) {
        const question = this.questionList[i];
        const probability = questionProbabilities[i];
        randomValue -= probability;
    
        if (randomValue <= 0) {
          return question;
        }
      }
    
      return this.questionList[0];
    }
  }

  return VerbenUndNomenMitPraepositionenQuestionProvider;
});