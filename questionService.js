const questionService = (function () {
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
  
    function checkAnswer(questionIndex, answer) {
      const question = questions[questionIndex];
      return answer === question.answer;
    }
  
    function updateProbability(questionIndex, isCorrect) {
      const currentProbability = questionProbabilities[questionIndex] || 1;
  
      if (isCorrect) {
        questionProbabilities[questionIndex] = Math.max(currentProbability * 0.9, 0.1);
      } else {
        questionProbabilities[questionIndex] = Math.min(currentProbability * 1.5, 5);
      }
    }
  
    function getIncorrectAnswer(questionIndex, answer) {
      const question = questions[questionIndex];
      return {
        question: question.sentence,
        answer: answer,
        time: new Date().toLocaleString()
      };
    }
  
    return {
      getRandomQuestion,
      checkAnswer,
      updateProbability,
      getIncorrectAnswer,
    };
  })();