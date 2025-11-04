document.addEventListener("DOMContentLoaded", () => {

  let player;
  const channels = ['jfKfPfyJRdk', '5qap5aO4i9A'];
  let currentChannel = 0;

  // YouTube IFrame API
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: channels[currentChannel],
      playerVars: { autoplay: 1, controls: 0, modestbranding: 1 },
      events: { onReady: event => console.log("player ready")
       }
    });
  }
  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

  // Custom controls
  const playButton= document.getElementById('pause');
  let isPlaying=true;

 playButton.addEventListener('click', () =>{
    
    if(isPlaying){// reverses the boolean value ;so makes false as true 
      
      player.pauseVideo();
     
       playButton.innerHTML=` <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z" fill="currentColor"/> </svg>`
      console.log("pause button clicked");
      isPlaying=false;
    }
    else{
      
      player.playVideo();
       playButton.innerHTML=`<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M10 4H5v16h5V4zm9 0h-5v16h5V4z" fill="currentColor"/> </svg>`
     
      console.log("play button clicked");
      isPlaying=true;
    }


    

    
  }); 

   const images=["retro6.gif","retro-gif2.jpeg","retro-5.gif"];
    const imgElement=document.getElementById("bg-image");


  const shuffleBtn=document.getElementById('shuffle');
  shuffleBtn.addEventListener('click', () =>{
    console.log("s clicked");
    
    let randomIndex;
    do{
      randomIndex=Math.floor(Math.random()*channels.length);
    }
    while(randomIndex===currentChannel);
    currentChannel=randomIndex;
    player.loadVideoById(channels[currentChannel]);

   const randomIndex1 = Math.floor(Math.random() * images.length);
    imgElement.src = images[randomIndex1];
  });

  document.getElementById('back').addEventListener('click',()=>{
    console.log("b clicked");
    
    currentChannel=(currentChannel-1+ channels.length)%channels.length;
    player.loadVideoById(channels[currentChannel])
  });

  document.getElementById('forward').addEventListener('click', () => {
    console.log(" f clicked");
    
    currentChannel = (currentChannel + 1) % channels.length;
    player.loadVideoById(channels[currentChannel]);
  });

  // Fullscreen
  // const fullscreenBtn = document.getElementById("full");
  // const mainContainer = document.getElementById("main-container");

  // fullscreenBtn.addEventListener("click", () => {
  //   if (!document.fullscreenElement) {
  //     mainContainer.requestFullscreen();
  //   } else {
  //     document.exitFullscreen();
  //   }
  // });

});
