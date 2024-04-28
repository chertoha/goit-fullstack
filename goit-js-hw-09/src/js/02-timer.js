import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

//vars
const TIMER_INTERVAL_DELAY = 1000;
let isTimerActive = false;
let timerId = null;
let endDate = null;

//refs
const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerRefs = {
  daysValue: document.querySelector('span[data-days]'),
  hoursValue: document.querySelector('span[data-hours]'),
  minutesValue: document.querySelector('span[data-minutes]'),
  secondsValue: document.querySelector('span[data-seconds]'),
};

startBtn.disabled = true;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    onDatePickerClose(selectedDates[0]);
  },
});

startBtn.addEventListener('click', () => {
  if (!isTimerActive) {
    switchTimer(true);
  }
});

function onDatePickerClose(date) {
  if (date <= new Date()) {
    Notify.failure('Please choose a date in the future');
    return;
  }
  startBtn.disabled = false;
  endDate = date;
}

function switchTimer(isEnabled) {
  if (isEnabled) {
    timerId = setInterval(updateTimerData, TIMER_INTERVAL_DELAY);
    startBtn.disabled = isEnabled;
  } else {
    clearInterval(timerId);
  }
  isTimerActive = isEnabled;
  dateInput.disabled = isEnabled;

  Notify.info(isEnabled ? 'Timer is started' : 'Timer is stopped');
}

function updateTimerData() {
  const timeLeft = endDate - new Date();
  if (timeLeft < 0) {
    switchTimer(false);
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(timeLeft);
  const { daysValue, hoursValue, minutesValue, secondsValue } = timerRefs;

  daysValue.textContent = addLeadingZero(days);
  hoursValue.textContent = addLeadingZero(hours);
  minutesValue.textContent = addLeadingZero(minutes);
  secondsValue.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(num) {
  return num.toString().padStart(2, '0');
}
