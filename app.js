/* This is for Student 2 - Splash Screen code */

let time = 4;
let countdown = document.getElementById("countdown");

let timer = setInterval(() => {
    time--;
    countdown.textContent = "Entering site in " + time + "...";

    if (time === 0) {
        clearInterval(timer);
    }
}, 1000);

function skip() {
    window.location.href = "home.html";
}
