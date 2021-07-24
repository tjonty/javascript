// END DATE
// CURRENT DATE
// END DATE - CURRENT DATE

const newBeginning = '1 Jan 2024';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const newBeginningDate = new Date(newBeginning);
    const currentDate = new Date();
    
    const totalSeconds = (newBeginningDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
 
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formateTime(hours);
    minutesEl.innerHTML = formateTime(minutes);
    secondsEl.innerHTML = formateTime(seconds);
}

function formateTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// INITIAL CALL
countdown();

setInterval(countdown, 1000);