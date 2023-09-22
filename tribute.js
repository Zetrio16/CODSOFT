var myVideo = document.getElementById("video");

function PP() {
    if (myVideo.paused) {
        myVideo.play();
    }
    else {
         myVideo.pause(); 
    }
}
// For screen size.

function BIG() {
    myVideo.width = 400;
}

function Normal() {
    myVideo.width = 300;
} 