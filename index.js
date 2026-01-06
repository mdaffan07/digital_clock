const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const meridianEl = document.getElementById("meridian");

let is24HourFormat = false;

function startClock() {
    updateTime();
    setInterval(updateTime, 1000);
}

function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    if (is24HourFormat) {
        hoursEl.innerHTML = formatNumber(hours);
        meridianEl.innerHTML = "";
    } else {
        const meridian = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        hoursEl.innerHTML = formatNumber(hours);
        meridianEl.innerHTML = meridian;
    }

    minutesEl.innerHTML = formatNumber(minutes);
    secondsEl.innerHTML = formatNumber(seconds);
}

function toggleTimeFormat() {
    is24HourFormat = !is24HourFormat;
    updateTime(); // instant update
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function formatNumber(value) {
    return value < 10 ? "0" + value : value;
}

startClock();
