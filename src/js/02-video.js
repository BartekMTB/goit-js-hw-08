//const Eliframe = document.querySelector('#vimeo-player');
import throttle from 'lodash.throttle';

const player = new Vimeo.Player('vimeo-player');

/* console.log(
  JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds
); */

player
  .setCurrentTime(
    JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds
  )
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

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000)
);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
