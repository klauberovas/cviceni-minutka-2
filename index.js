'use strict';

console.log('funguju!');

const timeInput = document.querySelector('.time-input');
let time = '';
const formElement = document.querySelector('form');
const audioElement = document.querySelector('audio');
let alarmSecondsElement = document.querySelector('.alarm__seconds');
let alarmMinutesElement = document.querySelector('.alarm__minutes');

const countDown = (e) => {
  e.preventDefault();
  time = Number(timeInput.value);

  const timerId = setInterval(() => {
    if (time === 0) {
      clearInterval(timerId);
      audioElement.play();
    } else {
      time -= 1;
      alarmMinutesElement.textContent = `${String(
        Math.floor(time / 60),
      ).padStart(2, '0')}`;
      alarmSecondsElement.textContent = `${String(
        Math.round(time % 60),
      ).padStart(2, '0')}`;
    }
  }, 1000);
};
formElement.addEventListener('submit', countDown);
