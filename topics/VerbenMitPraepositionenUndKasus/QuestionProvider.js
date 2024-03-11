define([
    'QuestionsProvider',
    './Question',
    './Questions'
], function (QuestionsProvider, VerbenMitPraepositionenUndKasusQuestion, questions) {
    class VerbenMitPraepositionenUndKasusQuestionProvider extends QuestionsProvider {
        constructor(userProgressManager) {
            super();
            this.topic = 'VerbenMitPraepositionenUndKasus';
            this.userProgressManager = userProgressManager;
            this.loadQuestions();
        }

        loadQuestions() {
            questions.forEach(question => {
                const newQuestion = new VerbenMitPraepositionenUndKasusQuestion(question.id, this.topic, question.sentence, question.options, question.answer, question.verb);
                this.addQuestion(newQuestion);
            });
        }

        getNextQuestion() {
            const questionProbabilities = this.questionList.map(question =>
                this.userProgressManager.getQuestionProbability(question.topic, question.id)
            );
            const totalProbability = questionProbabilities.reduce((sum, probability) => sum + probability, 0);
            let randomValue = Math.random() * totalProbability;

            for (let i = 0; i < this.questionList.length; i++) {
                const question = this.questionList[i];
                const probability = questionProbabilities[i];
                randomValue -= probability;

                if (randomValue <= 0) {
                    return question;
                }
            }

            return this.questionList[0];
        }
    }

    return VerbenMitPraepositionenUndKasusQuestionProvider;
});