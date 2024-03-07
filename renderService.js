const renderService = (function () {
    function renderQuestion(questionIndex) {
      isAnswered = false;
      const question = questions[questionIndex];
      document.getElementById("question").textContent = question.sentence;
  
      const optionsDiv = document.getElementById("options");
      optionsDiv.innerHTML = "";
  
      for (const option of question.options) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-outline-primary";
        button.textContent = option;
        button.addEventListener("click", (event) => handleAnswerSelection(event, option));
        optionsDiv.appendChild(button);
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
  
      for (let i = 0; i < answerHistory.length; i += config.badgesPerRow) {
        const row = document.createElement("div");
        row.classList.add("d-flex", "mb-2");
  
        for (let j = 0; j < config.badgesPerRow && i + j < answerHistory.length; j++) {
          const badge = document.createElement("span");
          badge.className = `badge ${answerHistory[i + j] ? "badge-success" : "badge-danger"} mr-2`;
          badge.textContent = "●";
          row.appendChild(badge);
        }
  
        badgeContainer.appendChild(row);
      }
  
      feedbackDiv.appendChild(badgeContainer);
  
      const correctAnswers = answerHistory.filter((result) => result).length;
      const totalAnswers = Math.min(answerHistory.length, config.maxAnswersTracked);
      const scoreDiv = document.createElement("div");
      scoreDiv.textContent = `${correctAnswers}/${totalAnswers}`;
      feedbackDiv.appendChild(scoreDiv);
    }
  
    return {
      renderQuestion,
      renderFeedback,
    };
  })();