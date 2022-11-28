import { dataKey } from './key.js';

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
      // console.table(response.list);
      const newArr = [];
      response.list.forEach(element => {
        newArr.push(element);
      });
      getEveryNth(newArr, 8)
    })
  })
}

function createForecastDisplay(element) {
  const getForcastBlock = document.querySelector('.forecast');
  const createDayBlock = document.createElement('div');
  const createTempDisplay = document.createElement('p');
  getForcastBlock.appendChild(createDayBlock);
  createDayBlock.appendChild(createTempDisplay);
  createTempDisplay.textContent = `${Math.round(element.main.temp)}`;
  return createDayBlock;
}

function getEveryNth(newArr, nth) {
  const results = [];
  for (let i = 0; i < newArr.length; i += nth) {
      results.push(newArr[i]);
  }
  results.forEach(element => {
    createForecastDisplay(element);
  });
  return results;
}