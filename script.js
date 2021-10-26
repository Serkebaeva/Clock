const hourArrow = document.querySelector(".hour");
const minuteArrow = document.querySelector(".minute");
const secondsArrow = document.querySelector(".second");
const timeOutput = document.querySelector(".time");
const dateOutput = document.querySelector(".date");

const days = [
  "Июнь",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hoursForClock = hours % 12; // т.к. часы круглые, т.е. в 12-ти часовом формате, то нужно поделить на 12 и взять остаток...

  hourArrow.style.transform = `translate(-50% -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`; //заводим новую перемнную(функцию) Scale, чтобы определить и дать команду стрелкам спускаться на определенные градусы, чтобы было точно по цифрам...

  minuteArrow.style.transform = `translate(-50% -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  secondsArrow.style.transform = `translate(-50% -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeOutput.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

  dateOutput.innerHTML = `${days[day]}, ${months[month]} <span>${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
