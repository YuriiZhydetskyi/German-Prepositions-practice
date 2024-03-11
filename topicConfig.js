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
    }
  };
  return topicConfig;
});