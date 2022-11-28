import { dataKey } from './key.js';
import { displayCurrentTemp } from './displayCurrentTemp.js';

export function getWeatherData() {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Nashville&appid=${dataKey}`,
  {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // console.log(`latitude = ${response[0].lat} and longitude is = ${response[0].lon}`);
    // console.log(response);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${response[0].lat}&lon=${response[0].lon}&appid=${dataKey}&units=imperial`,
    {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response)
      displayCurrentTemp(response);
      console.log(`The temp is currently ${Math.round(response.main.temp)}.`)
    })
  })
}

