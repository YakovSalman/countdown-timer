const currentYear = new Date().getFullYear();

const NewYearDate = new Date(`January, 1 ${currentYear + 1} 00:00:00`);

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const year = document.getElementById('year');
year.innerHTML = `${currentYear + 1}`;

function updateDate() {
    const currentDate = new Date();

    const diff = NewYearDate - currentDate;

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60 ) % 60;
    const secondsLeft = Math.floor(diff / 1000 ) % 60;

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;
}
updateDate();
setInterval(updateDate, 1000);















































