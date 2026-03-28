/* This is for Student 2 - Splash Screen code */

let time = 4;
let countdown = document.getElementById("countdown");
let splash = document.querySelector(".splash");

let timer = setInterval(() => {
    time--;
    countdown.textContent = "Entering site in " + time + "...";

    if (time === 0) {
        clearInterval(timer);

        // start fade out
        splash.classList.add("fade-out");

        // wait for fade to finish, then redirect
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000); // matches CSS transition time
    }
}, 1000);
