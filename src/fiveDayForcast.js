import { dataKey } from './key.js';
import { getEveryNth } from './fiveDayDisplay.js';

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
      // Hiding this console log for now, used to see the data table for quick reference when needed
      console.table(response.list);
      const newArr = [];
      response.list.forEach(element => {
        newArr.push(element);
      });
      getEveryNth(newArr, 8)
    })
  })
}
