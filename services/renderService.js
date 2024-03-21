define(['./config', './topicConfig', 'UserConfigs'], function (config, topicConfig, UserConfigs) {
    const userConfigs = new UserConfigs();

    const renderService = {
        renderQuestion: function (question, handleAnswerSelection) {
            let questionRenderModule = topicConfig[question.topic].questionRenderModule;

            const explanationElement = document.getElementById("explanation");
            explanationElement.innerHTML = "";

            requirejs([questionRenderModule], function(QuestionRender) {
                let questionRender = new QuestionRender();
                questionRender.renderQuestion(question, handleAnswerSelection);
            });
        },

        renderFeedback: function (isCorrect, answer, currentQuestion, answerHistory) {
            let questionRenderModule = topicConfig[currentQuestion.topic].questionRenderModule;

            try {
                if (!isCorrect && userConfigs.isVibrationEnabled()) {
                    if (!navigator.userAgent.includes('Safari')) {
                        navigator.vibrate(200);
                    }
                }
            } catch (error) {
                console.error(error);
            }

            requirejs([questionRenderModule], function(QuestionRender) {
                let questionRender = new QuestionRender();
                questionRender.renderFeedback(isCorrect, answer, currentQuestion);
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

            feedbackDiv.appendChild(badgeContainer);

            const correctAnswers = answerHistory.filter((result) => result).length;
            const totalAnswers = Math.min(answerHistory.length, config.maxAnswersTracked);
            const scoreDiv = document.createElement("div");
            scoreDiv.classList.add("text-center", "mb-2");
            scoreDiv.textContent = `Correct ${correctAnswers}/${totalAnswers}`;
            feedbackDiv.appendChild(scoreDiv);
        }
    };

    return renderService;
});