define(function () {
  class QuestionType {
    constructor(id, topic, sentence, options, answer) {
      this.id = id;
      this.topic = topic;
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