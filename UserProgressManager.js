define(function () {
    class UserProgressManager {
        constructor() {
            this.answerHistory = [];
            this.questionProbabilities = {};
            this.incorrectAnswers = [];
        }

        recordAnswer(question, isCorrect) {
            this.answerHistory.push(isCorrect);
            this.updateQuestionProbability(question, isCorrect);

            if (!isCorrect) {
                this.incorrectAnswers.push({
                    question: question.sentence,
                    answer: question.answer,
                    time: new Date().toLocaleString()
                });
            }
        }

        updateQuestionProbability(question, isCorrect) {
            const currentProbability = this.questionProbabilities[question.sentence] || 1;

            if (isCorrect) {
                this.questionProbabilities[question.sentence] = Math.max(currentProbability * 0.9, 0.1);
            } else {
                this.questionProbabilities[question.sentence] = Math.min(currentProbability * 1.5, 5);
            }
        }

        getAnswerHistory() {
            return this.answerHistory;
        }

        getQuestionProbabilities() {
            return this.questionProbabilities;
        }

        getIncorrectAnswers() {
            return this.incorrectAnswers;
        }
    }

    return UserProgressManager;
});