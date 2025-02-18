const video = document.getElementById("videoPlayer");
const playVideoBtn = document.getElementById("playVideo");
const videoProgress = document.getElementById("videoProgress");
const videoTime = document.getElementById("videoTime");

playVideoBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playVideoBtn.textContent = "❚❚";
    } else {
        video.pause();
        playVideoBtn.textContent = "▶";
    }
});

video.addEventListener("timeupdate", () => {
    videoProgress.value = (video.currentTime / video.duration) * 100;
    videoTime.textContent = formatTime(video.currentTime);
});

videoProgress.addEventListener("input", () => {
    video.currentTime = (videoProgress.value / 100) * video.duration;
});

const audio = document.getElementById("audioPlayer");
const playAudioBtn = document.getElementById("playAudio");
const audioProgress = document.getElementById("audioProgress");
const audioTime = document.getElementById("audioTime");

playAudioBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playAudioBtn.textContent = "❚❚";
    } else {
        audio.pause();
        playAudioBtn.textContent = "▶";
    }
});

audio.addEventListener("timeupdate", () => {
    audioProgress.value = (audio.currentTime / audio.duration) * 100;
    audioTime.textContent = formatTime(audio.currentTime);
});

audioProgress.addEventListener("input", () => {
    audio.currentTime = (audioProgress.value / 100) * audio.duration;
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60); 
}

