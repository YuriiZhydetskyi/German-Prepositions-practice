define(function() {
  const topicConfig = {
    'VerbenMitPraepositionenUndKasus': {
      text: 'Verben mit Praepositionen und Kasus',
      questionProviderModule: 'topics/VerbenMitPraepositionenUndKasus/QuestionProvider',
      questionRenderModule: 'topics/VerbenMitPraepositionenUndKasus/QuestionRender'
    },
    'VerbenUndNomenMitPraepositionen': {
      text: 'Verben und Nomen mit Praepositionen',
      questionProviderModule: 'topics/VerbenUndNomenMitPraepositionen/QuestionProvider',
      questionRenderModule: 'topics/VerbenUndNomenMitPraepositionen/QuestionRender'
    },
    'PronomenUndReflexivpronomen': {
      text: 'Pronomen und Reflexivpronomen',
      questionProviderModule: 'topics/PronomenUndReflexivpronomen/QuestionProvider',
      questionRenderModule: 'topics/PronomenUndReflexivpronomen/QuestionRender'
    },
    'WunscheUndTraume': {
      text: 'Wünsche und Träume',
      questionProviderModule: 'topics/WunscheUndTraume/QuestionProvider',
      questionRenderModule: 'topics/WunscheUndTraume/QuestionRender'
    }
  };
  return topicConfig;
});