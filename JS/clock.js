const clock = document.querySelector("h2#utc-clock");

function getClock() {
    const date = new Date();
    const years = String(date.getFullYear());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${years}Y ${hours}H ${minutes}M ${second}S `;

}

getClock();
setInterval(getClock, 1000);
