const clockTitle = document.querySelector(".js-clock");

function xmasCountDown() {
  const date = new Date();
  const xmasDate = new Date(2022, 12, 25, 0, 0, 0);
  const dDaySeconds = Math.floor((xmasDate - date) / 1000);
  const countDownSeconds = String(Math.floor(dDaySeconds % 60)).padStart(2, 0);
  const countDownMinutes = String(Math.floor(dDaySeconds / 60) % 60).padStart(2,0);
  const countDownHours = String(Math.floor(dDaySeconds / (60 * 60)) % 24).padStart(2, 0);
  const countDownDays = String(Math.floor((dDaySeconds / (60 * 60 * 24)) - 30)).padStart(2, 0);

  clockTitle.innerText =
    countDownDays +
    "D " +
    countDownHours +
    "H " +
    countDownMinutes +
    "M " +
    countDownSeconds +
    "S ";
}

xmasCountDown();
setInterval(xmasCountDown, 1000);