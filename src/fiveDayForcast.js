import { dataKey } from './key.js';

export function getFiveDayData() {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Nashville&appid=${dataKey}`,
  {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // console.log(`latitude = ${response[0].lat} and longitude is = ${response[0].lon}`);
    // console.log(response);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${response[0].lat}&lon=${response[0].lon}&appid=${dataKey}&units=imperial`,
    {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.list)
      // console.log(response.list[0].main.temp)
      // console.log(response.list[7].main.temp)
      // console.log(response.list[15].main.temp)
      // console.log(response.list[23].main.temp)
      // console.log(response.list[31].main.temp)
      // console.log(response.list[39].main.temp)
      console.table(response.list);
      const newArr = [];
      const createForecastDisplay = (element) => {
        const getForcastBlock = document.querySelector('.forecast');
        const createDayBlock = document.createElement('div');
        const createTempDisplay = document.createElement('p');
        getForcastBlock.appendChild(createDayBlock);
        createDayBlock.appendChild(createTempDisplay);
        createTempDisplay.textContent = `${Math.round(element.main.temp)}`;
        return createDayBlock;
      }
      response.list.forEach(element => {
        newArr.push(element);
      });
      function getEveryNth(newArr, nth) {
        const results = [];
        for (let i = 0; i < newArr.length; i += nth) {
            results.push(newArr[i]);
        }
        results.forEach(element => {
          console.log(element.main.temp);
          createForecastDisplay(element);
        });
        return results;
      }
      console.table(getEveryNth(newArr, 8));
    })
  })
}



// import { dataKey } from './key.js';

// async function printValues(response) {
//   const values = await response;
//   console.log(`Here is the returned, out of scope values: ${values.main}!`);
// }

// export function getFiveDayData() {
//   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Nashville&appid=${dataKey}`,
//   {mode: 'cors'})
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(response) {
//     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${response[0].lat}&lon=${response[0].lon}&appid=${dataKey}&units=imperial`,
//     {mode: 'cors'})
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(response) {
//       printValues(response);
//     })
//   })
// }

// export const printValues = async (response) => {
//   const values = await response;
//   console.log(`Here is the returned, out of scope values: ${values.main.city}!`);
// }

// console.log(typeof getFiveDayData)

// printValues();

// console.log(resp);

