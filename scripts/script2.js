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
      updateButton();
    };

    audioControls.appendChild(playPauseButton);
    audioContainer.appendChild(audioControls);
    document.body.appendChild(audioContainer);

    function togglePlayPause() {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    function updateButton() {
      playPauseButton.innerHTML = audio.paused
        ? '<i class="fa-solid fa-volume-xmark"></i>'
        : '<i class="fa-solid fa-volume-high"></i>';
    }
  });