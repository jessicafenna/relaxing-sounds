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
const keys =
[
  'q',
  'w',
  'e',
  'r'
];




// function for click to play sounds
sounds.forEach((sound) => { 
  const btn = document.createElement ('button');
  btn.classList.add('btn');
  btn.innerText = sound, `Press ${keys}`;

  btn.addEventListener("click", () =>{ 
   
    stopSongs();
    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
  
});

// document.addEventListener("keydown", function(e) {
//     if (e.keyCode == 81) {
//       document.getElementById("audio").play();
//     }
//   });


// function to stop last sound from playing when clicking next
function stopSongs(){ 
  sounds.forEach(sound =>{ 
    const song = document.getElementById(sound);
    song.pause();
    // song.currentTime = 0;
  });
}

// sounds.forEach((sound) => {
//     btn.addEventListener("click", () =>{ 
//       if(sound == sound.paused)
//       {
//         sound.play();
//       }
//       else
//       {
//         sound.pause();
//       }
//   });
//   });

