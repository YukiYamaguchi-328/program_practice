const bgmAudio = document.getElementById('bgmAudio');
const bgmToggle = document.getElementById('bgmToggle');

bgmToggle.addEventListener('click', () => {
  if (bgmAudio.paused) {
    bgmAudio.play();
    bgmToggle.textContent = 'BGM 停止';
  } else {
    bgmAudio.pause();
    bgmToggle.textContent = 'BGM 再生';
  }
});

