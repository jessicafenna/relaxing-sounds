// Sounds stored in an array, called in next function 
const sounds = [ 
 'birds - click or press q',
 'rainforest - click here or press w',
 'sea waves - click here or press e',
 'rain - click here or press r',
 'tropical rain storm - click here or press t'
]

// function for click to play sounds
sounds.forEach((sound) => { 
  const btn = document.createElement ('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener("click", () =>{ 
   
    // stopSongs();
    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
  
});


document.addEventListener("keydown", function(event) {
  if (event.keyCode == 81) {
    // stopSongs();
    document.getElementById("birds - click or press q").play();
  }
  else if  (event.keyCode == 87) {
    // stopSongs();
    document.getElementById("rainforest - click here or press w").play();
  }
  else if (event.keyCode == 69) {
    // stopSongs();
    document.getElementById("sea waves - click here or press e").play();
  }
  else if (event.keyCode == 82){ 
    document.getElementById("rain - click here or press f").play();
  }
  else if (event.keyCode == 84) { 
    document.getElementById("tropical rain storm - click here or press t").play()
  }
});

// function to stop last sound from playing when clicking next
function stopSongs(){ 
  sounds.forEach(sound =>{ 
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
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

