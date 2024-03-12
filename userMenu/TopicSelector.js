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

        getQuestionProviderModule(topicName) {
            return this.topicConfig[topicName].questionProviderModule;
        }

        getQuestionRenderModule(topicName) {
            return this.topicConfig[topicName].questionRenderModule;
        }
    }

    return TopicSelector;
});