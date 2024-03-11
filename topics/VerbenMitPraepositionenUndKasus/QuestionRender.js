define(function () {
    class VerbenMitPraepositionenUndKasusQuestionRender {
        renderQuestion(question, handleAnswerSelection) {
            const questionElement = document.getElementById("question");
            questionElement.innerHTML = `${question.verb} <br> ${question.sentence.replace("_____", "<span class='blank'>_____</span>")}`;

            const optionsDiv = document.getElementById("options");
            optionsDiv.innerHTML = "";

            question.options.forEach(option => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "btn btn-outline-primary btn-block btn-lg";
                button.textContent = option;
                button.addEventListener("click", (event) => handleAnswerSelection(event, option));

                optionsDiv.appendChild(button);
            });
        }

        renderFeedback(isCorrect, answer, currentQuestion) {
            const optionsDiv = document.getElementById("options");
            const buttons = optionsDiv.querySelectorAll("button");

            buttons.forEach((button) => {
                button.classList.remove("btn-success", "btn-danger");
                if (button.textContent === currentQuestion.answer) {
                    button.classList.add("btn-success");
                } else if (button.textContent === answer && !isCorrect) {
                    button.classList.add("btn-danger");
                }
            });

            const questionElement = document.getElementById("question");
            const blankElement = questionElement.querySelector(".blank");
            if (blankElement) {
                blankElement.textContent = currentQuestion.answer;
                blankElement.classList.add("text-success", "font-weight-bold");
            }
        }
    }

    return VerbenMitPraepositionenUndKasusQuestionRender;
});