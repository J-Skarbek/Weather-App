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
      // console.log(response.list.length)
      // console.log(response.list[0].main.temp)
      // console.log(response.list[7].main.temp)
      // console.log(response.list[15].main.temp)
      // console.log(response.list[23].main.temp)
      // console.log(response.list[31].main.temp)
      // console.log(response.list[39].main.temp)
      console.table(response.list);
      const newArr = [];
      response.list.forEach(element => {
        newArr.push(element)
      });
      function getEveryNth(newArr, nth) {
        const results = [];
        for (let i = 0; i < newArr.length; i += nth) {
            results.push(newArr[i])
        }
        return results;
      }
      console.table(getEveryNth(newArr, 8));
    })
  })
  }

//   `api.openweathermap.org/data/2.5/forecast?lat=${response[0].lat}&lon=${response[0].lon}&appid=${dataKey}`