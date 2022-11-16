import { dataKey } from './key.js';

export function getFiveDayData() {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Nashville&appid=${dataKey}`,
    {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(`latitude = ${response[0].lat} and longitude is = ${response[0].lon}`);
      console.log(response);
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${response[0].lat}&lon=${response[0].lon}&appid=${dataKey}&units=imperial`,
      {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response)
        console.log(response.list[2].main.temp)
      })
    })
  }

//   `api.openweathermap.org/data/2.5/forecast?lat=${response[0].lat}&lon=${response[0].lon}&appid=${dataKey}`