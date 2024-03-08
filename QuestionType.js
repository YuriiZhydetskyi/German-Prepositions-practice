define(function() {
class QuestionType {
    constructor(sentence, options, answer) {
      this.sentence = sentence;
      this.options = options;
      this.answer = answer;
    }
  
    checkAnswer(userAnswer) {
      return userAnswer === this.answer;
    }
  }
  
  return QuestionType;
});