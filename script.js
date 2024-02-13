// Countdown Timer
function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var totalSeconds = 21 * 3600 + 42 * 60 + 15; 
    var display = document.querySelector('#timer');
    startTimer(totalSeconds, display);
};

function showForm() {
    var form = document.getElementById('slide-in-form');
    form.classList.toggle('hidden');
    setTimeout(function () {
        form.style.bottom = '0';
    }, 100);
}