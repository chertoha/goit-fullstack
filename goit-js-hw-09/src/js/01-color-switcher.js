//refs
const TIMER_INTERVAL_DELAY = 1000;
let timerId = null;
let isTimerActive = false;
const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
refs.stopBtn.disabled = true;

//Listeners
refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

/*-----------------------Functions, Handlers-----------------------*/
function onStartBtnClick() {
  if (isTimerActive) {
    return;
  }
  isTimerActive = true;
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  timerId = setInterval(randomBodyBackgroundColor, TIMER_INTERVAL_DELAY);
  console.log('start interval');
}

function onStopBtnClick() {
  isTimerActive = false;
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(timerId);
  console.log('stop interval');
}

function randomBodyBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
