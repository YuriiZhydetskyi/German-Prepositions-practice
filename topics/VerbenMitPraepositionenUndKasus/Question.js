define(['QuestionType'], function (QuestionType) {
    class VerbenMitPraepositionenUndKasusQuestion extends QuestionType {
        constructor(id, topic, sentence, options, answer, verb, resultSentence, translation, translationUkr) {
            super(id, topic, sentence, options, answer);
            this.verb = verb;
            this.resultSentence = resultSentence;
            this.translation = translation;
            this.translationUkr = translationUkr;
        }
    }
    return VerbenMitPraepositionenUndKasusQuestion;
});