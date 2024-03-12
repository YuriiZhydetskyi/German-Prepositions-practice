define(['QuestionType'], function (QuestionType) {
    class PronomenUndReflexivpronomenQuestion extends QuestionType {
        constructor(id, topic, sentence, options, answer, translation, translationUkr) {
            super(id, topic, sentence, options, answer);
            this.translation = translation;
            this.translationUkr = translationUkr;
        }
    }
    return PronomenUndReflexivpronomenQuestion;
});