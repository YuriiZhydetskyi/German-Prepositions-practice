define(['QuestionType'], function (QuestionType) {
    class WunscheUndTraumeQuestion extends QuestionType {
        constructor(id, topic, sentence, options, answer, translation, translationUkr) {
            super(id, topic, sentence, options, answer);
            this.translation = translation;
            this.translationUkr = translationUkr;
        }
    }
    return WunscheUndTraumeQuestion;
});