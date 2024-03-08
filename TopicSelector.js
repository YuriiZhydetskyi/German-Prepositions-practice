define(function () {
    class TopicSelector {
        constructor(topics) {
            this.topics = topics;
            this.selectedTopic = topics[0];
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

            this.topics.forEach(topic => {
                const option = document.createElement('option');
                option.value = topic;
                option.textContent = topic;
                topicSelectorSelect.appendChild(option);
            });

            topicSelectorContainer.appendChild(topicSelectorSelect);

            document.body.insertBefore(topicSelectorContainer, document.body.firstChild);
        }

        handleTopicChange(event) {
            this.selectedTopic = event.target.value;
        }

        getSelectedTopic() {
            return this.selectedTopic;
        }
    }

    return TopicSelector;
});