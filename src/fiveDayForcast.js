import { dataKey } from './key.js';
import { getEveryNth, resetForecastDisplays } from './fiveDayDisplay.js';

export function getFiveDayData() {
  // Get location lat/long
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Nashville&appid=${dataKey}`,
  {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // Get forecast data
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${response[0].lat}&lon=${response[0].lon}&appid=${dataKey}&units=imperial`,
    {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      const newArr = [];
      response.list.forEach(element => {
        newArr.push(element);
      });
      getEveryNth(newArr, 8)
    })
  })
}

export function getFiveDayFromUserInput(value) {
  // Get location lat/long
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=${dataKey}`,
  {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // Get forecast data
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${response[0].lat}&lon=${response[0].lon}&appid=${dataKey}&units=imperial`,
    {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      resetForecastDisplays();
      const newArr = [];
      response.list.forEach(element => {
        newArr.push(element);
      });
      getEveryNth(newArr, 8)
    })
  })
}