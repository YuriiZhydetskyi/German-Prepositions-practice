define(['./QuestionType'], function (QuestionType) {
    class VerbenUndNomenMitPraepositionenQuestion extends QuestionType {
        constructor(sentence, options, answer) {
            super(sentence, options, answer);
        }
    }
    return VerbenUndNomenMitPraepositionenQuestion;
});