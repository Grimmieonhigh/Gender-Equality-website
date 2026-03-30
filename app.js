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



/* Student 2 - JS code for the functionality of the AIS action cards */

let cards = document.querySelectorAll(".ais-card");
let scoreDisplay = document.getElementById("ais-score");
let levelDisplay = document.getElementById("ais-level");
let messageDisplay = document.getElementById("ais-message");

let total = 0;

cards.forEach(card => {
    card.addEventListener("click", () => {

        let points = parseInt(card.dataset.points);

        if (card.classList.contains("selected")) {
            card.classList.remove("selected");
            total -= points;
        } else {
            card.classList.add("selected");
            total += points;
        }

        scoreDisplay.textContent = total;
        updateFeedback();
    });
});

function updateFeedback() {

    if (total < 10) {
        levelDisplay.textContent = "Level: Low";
        messageDisplay.textContent = "Every small action counts. Start making a difference!";
        document.body.style.backgroundImage = "url('images/low.jpg')";
    } 
    else if (total < 20) {
        levelDisplay.textContent = "Level: Medium";
        messageDisplay.textContent = "Great progress! You are contributing to positive change.";
        document.body.style.backgroundImage = "url('images/medium.jpg')";
    } 
    else {
        levelDisplay.textContent = "Level: High";
        messageDisplay.textContent = "Excellent! You are making a powerful impact on gender equality.";
        document.body.style.backgroundImage = "url('images/high.jpg')";
    }
}

/* Student 2 - extra JS for editor page for fun */

let accordions = document.querySelectorAll(".accordion");

accordions.forEach(btn => {
    btn.addEventListener("click", () => {
        let panel = btn.nextElementSibling;

        panel.style.display =
            panel.style.display === "block" ? "none" : "block";
    });
});
