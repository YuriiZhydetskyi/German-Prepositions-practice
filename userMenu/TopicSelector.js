define(['UserConfigs'], function (UserConfigs) {
    class TopicSelector {
        constructor(topicConfig) {
            this.topicConfig = topicConfig;
            this.userConfigs = new UserConfigs();
            this.selectedTopic = this.getSelectedTopic();
        }

        getSelectedTopic() {
            let selectedTopic = this.userConfigs.getSelectedTopic();
            if (selectedTopic) {
                return selectedTopic;
            } else {
                return Object.keys(this.topicConfig)[0];
            }
        }

        getQuestionProviderModule() {
            return this.topicConfig[this.selectedTopic].questionProviderModule;
        }

        getQuestionRenderModule() {
            return this.topicConfig[this.selectedTopic].questionRenderModule;
        }
    }

    return TopicSelector;
});