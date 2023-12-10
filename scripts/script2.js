document.addEventListener('DOMContentLoaded', function() {
  var audio = new Audio('styles/musics/music_main.mp3');
  var audioContainer = document.createElement('div');
  audioContainer.appendChild(audio);

  var audioControls = document.createElement('div');
  var playPauseButton = document.createElement('button');
  audioControls.className = 'audioMusic';
  playPauseButton.className = 'btnMusic';
  playPauseButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  playPauseButton.onclick = function() {
    togglePlayPause();
  };

  audioControls.appendChild(playPauseButton);
  audioContainer.appendChild(audioControls);
  document.body.appendChild(audioContainer);

  function togglePlayPause() {
    if (audio.paused) {
      playPauseButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      audio.play();
    } else {
      playPauseButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
      audio.pause();
    }
  }
});