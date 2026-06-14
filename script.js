// Floating Hearts

const heartsContainer = document.getElementById("hearts");

for (let i = 0; i < 30; i++) {

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 30) + "px";
    heart.style.animationDuration = (5 + Math.random() * 6) + "s";

    heartsContainer.appendChild(heart);
}

// Countdown

const weddingDate = new Date("2026-06-23T08:32:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const gap = weddingDate - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);