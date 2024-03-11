define(['QuestionType'], function (QuestionType) {
    class VerbenMitPraepositionenUndKasusQuestion extends QuestionType {
        constructor(id, topic, sentence, options, answer, verb) {
            super(id, topic, sentence, options, answer);
            this.verb = verb;
        }
    }
    return VerbenMitPraepositionenUndKasusQuestion;
});