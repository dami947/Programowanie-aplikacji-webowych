var Drumkit = /** @class */ (function () {
    function Drumkit() {
        var _this = this;
        this.sounds = [];
        document.querySelectorAll('audio').forEach(function (el) {
            _this.sounds.push(el);
        });
        console.log(this.sounds);
        new DrumkitUI(this.sounds);
    }
    return Drumkit;
}());
var CHANELS_COUNT = 4;
var DrumkitUI = /** @class */ (function () {
    function DrumkitUI(sounds) {
        var _this = this;
        this.statsSection = document.getElementById('UI-section');
        this.chanels = [[]];
        this.sounds = [];
        this.soundButtons = [];
        this.chanelsDOMElements = [];
        this.activeChanel = null;
        // on init map sound to class variable and perpare event listener
        this.sounds = sounds.map(function (element) { return ({
            element: element,
            key: element.dataset.key
        }); });
        document.body.addEventListener('keypress', function (ev) { return _this.onKeyDown(ev); });
        this.renderButtons(sounds);
        this.createChanels();
    }
    DrumkitUI.prototype.renderButtons = function (sounds) {
        var _this = this;
        var container = document.getElementById('buttons');
        // create buttons in DOM
        sounds.forEach(function (element) {
            var soundBtn = document.createElement('button');
            soundBtn.innerText = "" + element.dataset.key;
            // assign ket to button, to recognize which is which
            soundBtn.dataset.soundKey = element.dataset.key;
            // here we need seperate event for each button
            soundBtn.addEventListener('click', function (ev) { return _this.onClick(element.dataset.key, ev); });
            // save button in class, just like sounds elements
            _this.soundButtons.push(soundBtn);
            container.appendChild(soundBtn);
        });
    };
    DrumkitUI.prototype.onClick = function (key, ev) {
        var time = ev.timeStamp;
        if (this.activeChanel !== null) {
            this.chanels[this.activeChanel].push({
                key: key,
                time: time
            });
        }
        this.playSound(key);
    };
    DrumkitUI.prototype.onKeyDown = function (ev) {
        var key = ev.key;
        var time = ev.timeStamp;
        if (this.activeChanel !== null) {
            this.chanels[this.activeChanel].push({
                key: key,
                time: time
            });
        }
        console.log(this.chanels);
        this.playSound(key);
    };
    DrumkitUI.prototype.playSound = function (key) {
        if (key === void 0) { key = null; }
        // if there's no sound, do nothing
        // see this.activateChanel for example
        if (key) {
            var btn = this.soundButtons.find(function (el) { return el.dataset.soundKey === key; });
            var element = this.sounds.find(function (v) { return v.key === key; }).element;
            element.currentTime = 0;
            element.play();
            this.giveAnimation(btn);
        }
    };
    DrumkitUI.prototype.giveAnimation = function (btn) {
        var animSpan = document.createElement('span');
        btn.classList.add("playing");
        btn.appendChild(animSpan);
        setTimeout(function () {
            btn.classList.remove("playing");
        }, 100);
        animSpan.addEventListener('animationend', function () {
            animSpan.remove();
        });
    };
    DrumkitUI.prototype.createChanels = function () {
        var _this = this;
        var container = document.getElementById('chanels');
        var _loop_1 = function (i) {
            var chanelContainer = document.createElement('div');
            chanelContainer.classList.add("chanelContainer");
            // record button
            var recordBtn = document.createElement('button');
            recordBtn.className = "recordBtn";
            recordBtn.addEventListener('click', function (ev) { return _this.activateChanel(i, ev); });
            chanelContainer.appendChild(recordBtn);
            // play button 
            var playBtn = document.createElement('button');
            playBtn.className = "playBtn";
            playBtn.disabled = true;
            var s = playBtn.addEventListener('click', function (ev) { return _this.onPlayStopChanel(i); });
            chanelContainer.appendChild(playBtn);
            // progress bar 
            var progressBarContainer = document.createElement('div');
            progressBarContainer.className = "progressBar";
            var progressBar = document.createElement('span');
            progressBar.addEventListener('animationend', function () {
                progressBar.style.animation = null;
                _this.chanelsDOMElements[i].playBtn.disabled = false;
            });
            progressBarContainer.appendChild(progressBar);
            chanelContainer.appendChild(progressBarContainer);
            this_1.chanelsDOMElements.push({
                playBtn: playBtn,
                recordBtn: recordBtn,
                progressBar: progressBar
            });
            container.appendChild(chanelContainer);
        };
        var this_1 = this;
        for (var i = 0; i < CHANELS_COUNT; i++) {
            _loop_1(i);
        }
    };
    DrumkitUI.prototype.activateChanel = function (chanelIndex, event) {
        // this click event determintaes recording time
        this.chanels[chanelIndex] = [{
                time: event.timeStamp,
                key: null
            }];
        this.activeChanel = chanelIndex;
        this.chanelsDOMElements.forEach(function (el) {
            el.recordBtn.disabled = true;
        });
        this.chanelsDOMElements[chanelIndex].playBtn.disabled = false;
        this.chanelsDOMElements[chanelIndex].playBtn.classList.add('stopBtn');
    };
    DrumkitUI.prototype.onPlayStopChanel = function (chanelIndex) {
        var _this = this;
        if (this.activeChanel === chanelIndex) {
            this.stopRecording(chanelIndex);
        }
        else {
            // play
            var chanel = this.chanels[chanelIndex];
            var prevTime_1 = chanel[0].time;
            this.initPlayingBehavior(chanelIndex);
            chanel.forEach(function (sound) {
                var time = sound.time - prevTime_1;
                setTimeout(function () {
                    _this.playSound(sound.key);
                }, time);
            });
        }
    };
    DrumkitUI.prototype.stopRecording = function (chanelIndex) {
        var _this = this;
        this.chanelsDOMElements[chanelIndex].playBtn.classList.remove('stopBtn');
        var chanel = this.chanels[chanelIndex];
        var recordingTime = chanel[chanel.length - 1].time - chanel[0].time;
        this.chanelsDOMElements[chanelIndex].progressBar.parentElement.querySelectorAll('time').forEach(function (v) { return v.remove(); });
        this.chanelsDOMElements.forEach(function (el) {
            el.recordBtn.disabled = false;
        });
        if (recordingTime) {
            chanel.splice(0, 1).forEach(function (sound) {
                var timeMoment = document.createElement('time');
                var percentageTime = (sound.time - chanel[0].time) / recordingTime * 100;
                console.log(percentageTime);
                timeMoment.className = "timeMoment";
                timeMoment.style.left = percentageTime + "%";
                _this.chanelsDOMElements[chanelIndex].progressBar.parentElement.appendChild(timeMoment);
            });
        }
        else {
            this.chanelsDOMElements[chanelIndex].playBtn.disabled = true;
        }
        this.activeChanel = null;
    };
    DrumkitUI.prototype.initPlayingBehavior = function (chanelIndex) {
        this.chanelsDOMElements[chanelIndex].playBtn.disabled = true;
        // animate progress bar
        var chanel = this.chanels[chanelIndex];
        var prevTime = chanel[0].time;
        var recordingTime = (chanel[chanel.length - 1].time - prevTime).toFixed() + "ms";
        this.chanelsDOMElements[chanelIndex].progressBar.style.animation = "";
        this.chanelsDOMElements[chanelIndex].progressBar.style.animation = "progressBarAnim " + recordingTime + " forwards linear";
    };
    return DrumkitUI;
}());
var drumkit = new Drumkit();
