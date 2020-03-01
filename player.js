

var mediaPlayer;


document.addEventListener('DOMContentLoaded',function(){
    initPlayer();
},false);

function initPlayer(){
    mediaPlayer = document.getElementById('video');

}

function toggleVideo(){
    var btn = document.getElementById('play-pause-btn');
    if(mediaPlayer.paused || mediaPlayer.ended){
        btn.innerHTML ="Pause";
        mediaPlayer.play();
    }
    else{
        btn.innerHTML = "Play";
        mediaPlayer.pause();
    }
}

function stopVideo(){
    mediaPlayer.pause();
    mediaPlayer.currentTime = 0;
    document.getElementById('play-pause-btn').innerHTML = "Play"
}
