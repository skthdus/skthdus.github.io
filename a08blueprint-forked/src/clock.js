const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDay()).padStart(2, "0");

  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clockTitle.innerHTML = `now > ${year}. ${month}. ${day} ${hour}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
