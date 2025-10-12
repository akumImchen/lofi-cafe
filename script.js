let player;

// List of video IDs (you can add more channels here)
const channels = [
  'jfKfPfyJRdk', // Lofi Girl 24/7
  '5qap5aO4i9A'  // Chillhop 24/7 (optional)
];
let currentChannel = 0;

// Initialize YouTube Player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '1',
    width: '1',
    videoId: channels[currentChannel],
    playerVars: { autoplay: 1, controls: 0, modestbranding: 1 },
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

// Custom button actions
document.getElementById('play').addEventListener('click', () => {
  player.playVideo();
});

document.getElementById('pause').addEventListener('click', () => {
  player.pauseVideo();
});

document.getElementById('switch').addEventListener('click', () => {
  currentChannel = (currentChannel + 1) % channels.length;
  player.loadVideoById(channels[currentChannel]);
});
