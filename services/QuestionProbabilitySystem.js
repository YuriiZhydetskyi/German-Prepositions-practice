define(function() {
    class QuestionProbabilitySystem {
      constructor(levels = 3) {
        this.levels = levels;
        this.questionLevels = {};
      }
  
      getQuestionLevel(topic, questionId) {
        const key = `${topic}_${questionId}`;
        return this.questionLevels[key] || 0;
      }
  
      updateQuestionLevel(topic, questionId, isCorrect) {
        const key = `${topic}_${questionId}`;
        const currentLevel = this.getQuestionLevel(topic, questionId);
        const newLevel = isCorrect ? currentLevel + 1 : 0;
        this.questionLevels[key] = Math.min(newLevel, this.levels - 1);
      }
  
      getQuestionProbability(topic, questionId) {
        const level = this.getQuestionLevel(topic, questionId);
        return Math.pow(2, this.levels - level - 1);
      }
    }
  
    return QuestionProbabilitySystem;
  });