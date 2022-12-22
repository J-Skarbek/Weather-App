import { getWeatherDataByName } from './getData.js';

export function addListeners() {
  const newLocationInput = document.querySelector('.location-search input');
  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.addEventListener('click', () => {
    if (newLocationInput.value != null && newLocationInput.value != undefined) {
      getWeatherDataByName(newLocationInput.value);
    } else {
      console.log('the location input is missing.')
    }
  });
  // window.addEventListener('keydown', e => {
  //   if (e.keycode === 'enter' && newLocationInput.value != null) {
  //     let userInput = newLocationInput.value;
  //     getWeatherDataByName(userInput);
  //   };
  // });
}