const throttle = require('lodash.throttle');

const ACTUAL_PLAYER_TIME_VALUE = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

setPlayerActualTime();

player.on('timeupdate', throttle(timeUpdateHandler, 1000));

/* -------------------------Functions, handlers------------------------------------*/

function timeUpdateHandler() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      // seconds = the current playback position
      //   console.clear();
      console.log(`Current player time value = ${Math.floor(seconds)} seconds`);
      setTimeToStorage(seconds);
    })
    .catch(function (error) {
      // an error occurred
    });
}

function setPlayerActualTime() {
  const actualPlayerTime = getTimeFromStorage();
  player
    .setCurrentTime(actualPlayerTime)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

function setTimeToStorage(timeValue) {
  localStorage.setItem(ACTUAL_PLAYER_TIME_VALUE, timeValue.toString());
}

function getTimeFromStorage() {
  return localStorage.getItem(ACTUAL_PLAYER_TIME_VALUE);
}
