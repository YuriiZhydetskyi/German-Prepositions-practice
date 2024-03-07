const renderService = (function () {
    function renderQuestion(questionIndex) {
        isAnswered = false;
        const question = questions[questionIndex];
        document.getElementById("question").innerHTML = question.sentence.replace("_____", "<span class='blank'>_____</span>");

        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";

        const rowCount = 2;
        const colCount = 2;

        for (let i = 0; i < rowCount; i++) {
            const row = document.createElement("div");
            row.className = "row mb-2";

            for (let j = 0; j < colCount; j++) {
                const index = i * colCount + j;
                if (index >= question.options.length) break;

                const option = question.options[index];
                const button = document.createElement("button");
                button.type = "button";
                button.className = "btn btn-outline-primary btn-block btn-lg";
                button.textContent = option;
                button.addEventListener("click", (event) => handleAnswerSelection(event, option));

                const col = document.createElement("div");
                col.className = "col-6";
                col.appendChild(button);
                row.appendChild(col);
            }

            optionsDiv.appendChild(row);
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
        badgeContainer.classList.add("d-flex", "flex-wrap", "justify-content-center", "fixed-bottom", "mb-2");      

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

        const questionElement = document.getElementById("question");
        const blankElement = questionElement.querySelector(".blank");
        if (blankElement) {
          blankElement.textContent = questions[currentQuestion].answer;
          blankElement.classList.add("text-success", "font-weight-bold");
        }

        feedbackDiv.appendChild(badgeContainer);

        const correctAnswers = answerHistory.filter((result) => result).length;
        const totalAnswers = Math.min(answerHistory.length, config.maxAnswersTracked);
        const scoreDiv = document.createElement("div");
        scoreDiv.classList.add("text-center", "mb-2");
        scoreDiv.textContent = `Correct ${correctAnswers}/${totalAnswers}`;
        feedbackDiv.appendChild(scoreDiv);
    }

    return {
        renderQuestion,
        renderFeedback,
    };
})();