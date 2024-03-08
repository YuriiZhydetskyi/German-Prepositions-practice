define(function () {
    class QuestionsProvider {
        constructor() {
            this.questionList = [];
            this.currentQuestionIndex = 0;
        }

        getNextQuestion() {
            if (this.currentQuestionIndex >= this.questionList.length) {
                this.currentQuestionIndex = 0;
            }
            return this.questionList[this.currentQuestionIndex++];
        }

        checkAnswer(question, userAnswer) {
            return question.checkAnswer(userAnswer);
        }

        resetProgress() {
            this.currentQuestionIndex = 0;
        }

        addQuestion(question) {
            this.questionList.push(question);
        }
    }

    return QuestionsProvider;
});