define(function () {
    class TopicSelector {
        constructor(topicConfig) {
            this.topicConfig = topicConfig;
            this.selectedTopic = Object.keys(topicConfig)[0];
        }

        renderTopicSelector() {
            const topicSelectorContainer = document.createElement('div');
            topicSelectorContainer.className = 'topic-selector-container';

            const topicSelectorLabel = document.createElement('label');
            topicSelectorLabel.textContent = 'Select a topic:';
            topicSelectorContainer.appendChild(topicSelectorLabel);

            const topicSelectorSelect = document.createElement('select');
            topicSelectorSelect.className = 'topic-selector-select';
            topicSelectorSelect.addEventListener('change', this.handleTopicChange.bind(this));

            Object.keys(this.topicConfig).forEach(topic => {
                const option = document.createElement('option');
                option.value = topic;
                option.textContent = this.topicConfig[topic].text;
                topicSelectorSelect.appendChild(option);
            });

            topicSelectorContainer.appendChild(topicSelectorSelect);

            document.body.insertBefore(topicSelectorContainer, document.body.firstChild);
        }

        handleTopicChange(event) {
            this.selectedTopic = event.target.value;
            // Trigger an event or call a function to update the questions and re-render the UI
            const topicChangeEvent = new CustomEvent('topicChange', { detail: this.selectedTopic });
            document.dispatchEvent(topicChangeEvent);
        }

        getSelectedTopic() {
            return this.selectedTopic;
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