define(['UserConfigs'], function (UserConfigs) {
    class WunscheUndTraumeQuestionRender {
        constructor() {
            this.userConfigs = new UserConfigs();
        }

        renderQuestion(question, handleAnswerSelection) {
            const questionElement = document.getElementById("question");
            questionElement.innerHTML = `${question.sentence.replace("_____", "<span class='blank'>_____</span>")}`;

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

            let resultSentence = questionElement.textContent;
            // remove everything what is in brackets and brackets itself from the result sentence
            resultSentence = resultSentence.replace(/\([^()]*\)/g, '');
            resultSentence = resultSentence.replace(/\([^()]*\)/g, '');

            const explanationElement = document.getElementById("explanation");
            explanationElement.innerHTML = `
                <p class="result-sentence">${resultSentence}</p>
                <p class="translation">${currentQuestion.translation}</p>
                <p class="translation-ukr">${currentQuestion.translationUkr}</p>
            `;

            if (this.userConfigs.isSoundEnabled()) {
                this.speakText(resultSentence);
            }
        }

        speakText(text) {
            var synth = window.speechSynthesis;
            var utterThis = new SpeechSynthesisUtterance(text);

            utterThis.lang = 'de-DE';

            synth.speak(utterThis);
        }
    }

    return WunscheUndTraumeQuestionRender;
});