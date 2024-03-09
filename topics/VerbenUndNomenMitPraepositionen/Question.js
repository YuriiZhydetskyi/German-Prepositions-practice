define(['./QuestionType'], function (QuestionType) {
    class VerbenUndNomenMitPraepositionenQuestion extends QuestionType {
        constructor(id, topic, sentence, options, answer) {
            super(id, topic, sentence, options, answer);
        }
    }
    return VerbenUndNomenMitPraepositionenQuestion;
});