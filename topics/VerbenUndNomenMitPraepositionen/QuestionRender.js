define(['UserConfigs'], function (UserConfigs) {
    class VerbenUndNomenMitPraepositionenQuestionRender {
        constructor() {
            this.userConfigs = new UserConfigs();
        }

        renderQuestion(question, handleAnswerSelection) {
            const questionElement = document.getElementById("question");
            questionElement.innerHTML = question.sentence.replace("_____", "<span class='blank'>_____</span>");

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

            if(this.userConfigs.isSoundEnabled()) {
                this.speakText(questionElement.textContent);
            }
        }

        speakText(text) {
            var synth = window.speechSynthesis;            
            var utterThis = new SpeechSynthesisUtterance(text);

            utterThis.lang = 'de-DE';
            
            synth.speak(utterThis);
        }
    }

    return VerbenUndNomenMitPraepositionenQuestionRender;
});