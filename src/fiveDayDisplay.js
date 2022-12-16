import { parseJSON, format } from 'date-fns';
import ClearIcon from './icons/day.svg';
import CloudsIcon from './icons/cloudy.svg';
import DrizzleIcon from './icons/rainy-4.svg';
import RainIcon from'./icons/rainy-5.svg';
import ThunderStormIcon from './icons/rainy-6.svg';
import SnowIcon from './icons/snowy-3.svg';
import MiscIcon from './icons/weather.svg';


// const testIcon = new Image();
// testIcon.src = TestIcon;
// testIcon.classList.add('test-icon')

const clearIcon = new Image();
clearIcon.src = ClearIcon;
const cloudsIcon = new Image();
cloudsIcon.src = CloudsIcon;
const drizzleIcon = new Image();
drizzleIcon.src = DrizzleIcon;
const rainIcon = new Image();
rainIcon.src = RainIcon;
const thunderStormIcon = new Image();
thunderStormIcon.src = ThunderStormIcon;
const snowIcon = new Image();
snowIcon.src = SnowIcon;
const miscellaneousIcon = new Image();
miscellaneousIcon.src = MiscIcon;


export function createForecastDisplay() {
  const mainContent = document.querySelector('.main-content');
  const element = document.createElement('div');
  element.classList.add('forecast');
  mainContent.appendChild(element);
  return element;  
}

export function getEveryNth(newArr, nth) {
  const results = [];
  for (let i = 0; i < newArr.length; i += nth) {
    results.push(newArr[i]);
  }
  results.forEach(element => {
    console.log(element.weather[0].main)
    populateForecastDisplay(element);
    console.log(determineIcon(element));
    // const getDiv = document.querySelectorAll('.day-block');
    // getDiv.forEach(div => {
    //   div.appendChild(determineIcon(element))
    // });
  });
  return results;
}

function determineIcon(element) {
  if (element.weather[0].main === 'Clear') {
    clearIcon.classList.add('weather-icon');
    // console.log(`The weather is ${element.weather[0].main}`)
    return clearIcon;
  } else if (element.weather[0].main === 'Clouds') {
    cloudsIcon.classList.add('weather-icon');
    // console.log(`The weather is ${element.weather[0].main}`);
    return cloudsIcon;
  } else if (element.weather[0].main === 'Drizzle') {
    drizzleIcon.classList.add('weather-icon');
    // console.log(`The weather is ${element.weather[0].main}`);
    return drizzleIcon;
  } else if (element.weather[0].main === 'Rain') {
    rainIcon.classList.add('weather-icon');
    // console.log(`The weather is ${element.weather[0].main}`);
    return rainIcon;
  } else if (element.weather[0].main === 'Thunderstorm') {
    thunderStormIcon.classList.add('weather-icon');
    // console.log(`The weather is ${element.weather[0].main}`);
    return thunderStormIcon;
  } else if (element.weather[0].main === 'Snow') {
    // console.log(`The weather is ${element.weather[0].main}`);
    snowIcon.classList.add('weather-icon');
    return snowIcon;
  } else if ((element.weather[0].main === 'Smoke') || (element.weather[0].main === 'Mist') || (element.weather[0].main === 'Haze') || (element.weather[0].main === 'Dust') || (element.weather[0].main === 'Fog') || (element.weather[0].main === 'Sand') || (element.weather[0].main === 'Ash') || (element.weather[0].main === 'Squall') || (element.weather[0].main === 'Tornado')) {
    miscellaneousIcon.classList.add('weather-icon');
    return miscellaneousIcon;
  } else {
    console.log('error in finding the weather.main response.')
  }
}

// function determineIcon(element) {
//   if (element.weather[0].main === 'Clear') {
//     clearIcon.classList.add('weather-icon');
//     return clearIcon;
//   }
//   if (element.weather[0].main === 'Clouds') {
//     cloudsIcon.classList.add('weather-icon');
//     return cloudsIcon;
//   } 
//   if (element.weather[0].main === 'Drizzle') {
//     drizzleIcon.classList.add('weather-icon');
//     return drizzleIcon;
//   } 
//   if (element.weather[0].main === 'Rain') {
//     rainIcon.classList.add('weather-icon');
//     return rainIcon;
//   } 
//   if (element.weather[0].main === 'Thunderstorm') {
//     thunderStormIcon.classList.add('weather-icon');
//     return thunderStormIcon;
//   } 
//   if (element.weather[0].main === 'Snow') {
//     snowIcon.classList.add('weather-icon');
//     return snowIcon;
//   }
//   if ((element.weather[0].main === 'Smoke') || (element.weather[0].main === 'Mist') || (element.weather[0].main === 'Haze') || (element.weather[0].main === 'Dust') || (element.weather[0].main === 'Fog') || (element.weather[0].main === 'Sand') || (element.weather[0].main === 'Ash') || (element.weather[0].main === 'Squall') || (element.weather[0].main === 'Tornado')) {
//     miscellaneousIcon.classList.add('weather-icon');
//     return miscellaneousIcon;
//   }
// }

function populateForecastDisplay(element) {
  const getForcastBlock = document.querySelector('.forecast');
  const createDayBlock = document.createElement('div');
  const createTempDisplay = document.createElement('p');
  const createDateDisplay = document.createElement('p');
  let icon = determineIcon(element);
  createDayBlock.classList.add('day-block')
  getForcastBlock.appendChild(createDayBlock);
  createDayBlock.append(createTempDisplay, createDateDisplay, icon);
  createTempDisplay.textContent = `${Math.round(element.main.temp)}`;
  createDateDisplay.textContent = `${format(parseJSON(element.dt_txt), 'EEEE')}`;
  return createDayBlock;
}
