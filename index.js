'use strict';

console.log('funguju!');

const timeInput = document.querySelector('.time-input');
const formElement = document.querySelector('form');
const audioElement = document.querySelector('audio');
let alarmSecondsElement = document.querySelector('.alarm__seconds');
let alarmMinutesElement = document.querySelector('.alarm__minutes');
let time = '';

const countDown = (e) => {
  e.preventDefault();
  time = Number(timeInput.value); //zadání hodnoty time od U

  //převedení setIntervalu na const, aby to šlo poté vypnout
  const timerId = setInterval(() => {
    //Vypršení odpočetu = zapnutí budíku a vypnutí setInterval
    if (time === 0) {
      clearInterval(timerId);
      audioElement.play();
      //Odečítání po 1s a vypsání zbývajícího času do budíku
    } else {
      time -= 1;
      //Zadání minut
      alarmMinutesElement.textContent = `${String(
        Math.floor(time / 60),
      ).padStart(2, '0')}`;
      //Zadání sekund
      alarmSecondsElement.textContent = `${String(
        Math.round(time % 60),
      ).padStart(2, '0')}`;
    }
  }, 1000);
};

formElement.addEventListener('submit', countDown);
