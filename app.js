// document.addEventListener("keydown", function(e) {
//     if (e.keyCode == 81) {
//       document.getElementById("audio").play();
//     }
//   });

// Sounds stored in an array, called in next function 
const sounds = [ 
 'birds',
 'rainforest',
 'sea waves',
 'rain'
]

// function playSounds()
//   sounds.forEach(sound =>{
//     const sound = document.getElementById(sound);
//     // var mySound= document.getElementById("sounds");
//       if(sound.paused)
//       {
//         sound.play();
//       }
//       else
//       {
//         sound.pause();
//       }
//   });

// function for click to play sounds
sounds.forEach((sound) => { 
  const btn = document.createElement ('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener("click", () =>{ 
   
    stopSongs();
    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);

});

// function to stop last sound from playing when clicking next
function stopSongs(){ 
  sounds.forEach(sound =>{ 
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

