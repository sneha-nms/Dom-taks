const targetDate = new Date('Saturday, 3 December 2023 11:40 am');

// '2023-12-02T11:30:00'

function updateTimer() {
    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);