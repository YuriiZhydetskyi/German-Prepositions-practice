define(['topicConfig'], function (topicConfig) {
    class UserConfigs {
        constructor() {
            this.loadConfigs();
        }

        loadConfigs() {
            const savedConfigs = localStorage.getItem('userConfigs');
            if (savedConfigs) {
                this.configs = JSON.parse(savedConfigs);
            } else {
                this.configs = {
                    selectedTopic: Object.keys(topicConfig)[0],
                    soundEnabled: true,
                    vibrationEnabled: true
                };
            }
        }

        saveConfigs() {
            localStorage.setItem('userConfigs', JSON.stringify(this.configs));
        }

        getSelectedTopic() {
            this.loadConfigs();
            return this.configs.selectedTopic;
        }

        setSelectedTopic(topic) {
            this.configs.selectedTopic = topic;
            this.saveConfigs();
        }

        isSoundEnabled() {
            this.loadConfigs();
            return this.configs.soundEnabled;
        }

        setSoundEnabled(enabled) {
            this.configs.soundEnabled = enabled;
            this.saveConfigs();
        }

        isVibrationEnabled() {
            this.loadConfigs();
            return this.configs.vibrationEnabled;
        }

        setVibrationEnabled(enabled) {
            this.configs.vibrationEnabled = enabled;
            this.saveConfigs();
        }
    }

    return UserConfigs;
});