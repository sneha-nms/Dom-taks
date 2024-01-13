let video = document.getElementById("myVideo");
let playPauseButton = document.getElementById("playPauseButton");

playPauseButton.addEventListener("click", togglePlayPause);

function togglePlayPause() {

    if (video.paused) {
    video.play();
    playPauseButton.innerHTML=' <i class="fa-solid fa-circle"></i> pause ';
  }

  else {
    video.pause();
    playPauseButton.innerHTML=' Play  <i class="fa-solid fa-circle"></i> ';
  }

}










// // let video=document.getElementById('vi')
// // let playtbutton=document.getElementById('play');
// // let passbutton=document.getElementById('pass');


// // playtbutton.addEventListener('click',play)
// // function play(){
// //     video.play();

// // }

// // passbutton.addEventListener('click',pass)
// // function pass(){

// //     video.pause();
// // //    if( video.play()){

    
// // //    }
// // }
// var ppbutton = document.getElementById("vidbutton");
// myVideo = document.getElementById("myvid");
// ppbutton.addEventListener("click", playPause);

// function playPause() { 
//     if (myVideo.paused) {
//         myVideo.play();
//         // ppbutton.innerHTML = "play";
//         ppbutton.style.backgroundColor="blue"
//         }
//     else  {
//         myVideo.pause(); 
//         ppbutton.innerHTML = "Pass";
//         ppbutton.style.backgroundColor="yellow";
//         }
// } 