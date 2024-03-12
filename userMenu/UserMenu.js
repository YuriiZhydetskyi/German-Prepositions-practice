define(['UserConfigs'], function (UserConfigs) {
    class UserMenu {
        constructor(userConfigs, topicConfig) {
            this.userConfigs = userConfigs;
            this.topicConfig = topicConfig;
            this.userMenuTemplate = `
                <div id="userMenu" class="user-menu position-fixed top-0 end-0 bottom-0 start-0 bg-light p-4" style="display: none; z-index: 1000;">
                    <div class="user-menu-header d-flex justify-content-between align-items-center mb-4">
                        <h3>User Menu</h3>
                        <button id="closeMenuBtn" class="btn-close" aria-label="Close"></button>
                    </div>
                    <div class="user-menu-content">
                        <div class="menu-item mb-3">
                            <label for="topicSelector" class="form-label">Select Topic:</label>
                            <select id="topicSelector" class="form-select topic-selector"></select>
                        </div>
                        <div class="menu-item mb-3">
                            <div class="form-check form-switch">
                                <input type="checkbox" id="soundToggle" class="form-check-input sound-toggle">
                                <label for="soundToggle" class="form-check-label">Sound</label>
                            </div>
                        </div>
                        <div class="menu-item">
                            <div class="form-check form-switch">
                                <input type="checkbox" id="vibrationToggle" class="form-check-input vibration-toggle">
                                <label for="vibrationToggle" class="form-check-label">Vibration</label>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        renderMenu() {
            document.getElementById('userMenuContainer').innerHTML = this.userMenuTemplate;
            this.populateTopicSelector();
            this.attachEventListeners();
            this.updateCheckboxStates();
        }

        updateCheckboxStates() {
            const soundToggle = document.getElementById('soundToggle');
            const vibrationToggle = document.getElementById('vibrationToggle');

            soundToggle.checked = this.userConfigs.isSoundEnabled();
            vibrationToggle.checked = this.userConfigs.isVibrationEnabled();
        }

        populateTopicSelector() {
            const topicSelector = document.getElementById('topicSelector');
            Object.keys(this.topicConfig).forEach(topic => {
                const option = document.createElement('option');
                option.value = topic;
                option.textContent = this.topicConfig[topic].text;
                topicSelector.appendChild(option);
            });
            
            let selectedTopic = this.userConfigs.getSelectedTopic();
            if (!selectedTopic) {
                selectedTopic = Object.keys(this.topicConfig)[0];
            }
            topicSelector.value = selectedTopic;
        }

        attachEventListeners() {
            document.getElementById('menuBtn').addEventListener('click', this.toggleMenu.bind(this));
            document.getElementById('closeMenuBtn').addEventListener('click', this.closeMenu.bind(this));
            document.getElementById('topicSelector').addEventListener('change', this.handleTopicChange.bind(this));
            document.getElementById('soundToggle').addEventListener('change', this.handleSoundToggle.bind(this));
            document.getElementById('vibrationToggle').addEventListener('change', this.handleVibrationToggle.bind(this));
        }

        toggleMenu() {
            const userMenu = document.getElementById('userMenu');
            userMenu.style.display = userMenu.style.display === 'none' ? 'block' : 'none';
        }

        closeMenu() {
            document.getElementById('userMenu').style.display = 'none';
        }

        handleTopicChange(event) {
            const selectedTopic = event.target.value;
            this.userConfigs.setSelectedTopic(selectedTopic);
            this.userConfigs.saveConfigs(); 
            const topicChangeEvent = new CustomEvent('topicChange', { detail: selectedTopic });
            document.dispatchEvent(topicChangeEvent);
        }

        handleSoundToggle(event) {
            const soundEnabled = event.target.checked;
            this.userConfigs.setSoundEnabled(soundEnabled);
            this.userConfigs.saveConfigs();
        }

        handleVibrationToggle(event) {
            const vibrationEnabled = event.target.checked;
            this.userConfigs.setVibrationEnabled(vibrationEnabled);
            this.userConfigs.saveConfigs();
        }
    }

    return UserMenu;
});