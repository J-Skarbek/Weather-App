import { parseJSON, format } from 'date-fns';
import ClearIcon from './icons/day.svg';
import CloudsIcon from './icons/cloudy.svg';
import DrizzleIcon from './icons/rainy-4.svg';
import RainIcon from './icons/rainy-5.svg';
import ThunderStormIcon from './icons/rainy-6.svg';
import SnowIcon from './icons/snowy-3.svg';
import MiscIcon from './icons/weather.svg';

export function createForecastDisplay() {
  const mainContent = document.querySelector('.main-content');
  const element = document.createElement('div');
  element.classList.add('forecast');
  mainContent.appendChild(element);
  return element;  
}

export function getEveryNth(newArr, nth) {
  const results = [];
  for (let i = 4; i < newArr.length; i += nth) {
    results.push(newArr[i]);
  }
  results.forEach(element => {
    console.log(element.weather[0].main)
    populateForecastDisplay(element);
    console.log(determineIcon(element));
  });
  return results;
}

function determineIcon(element) {
  if (element.weather[0].main === 'Clear') {
    const clearIcon = new Image();
    clearIcon.src = ClearIcon;
    clearIcon.classList.add('weather-icon');
    return clearIcon;
  } else if (element.weather[0].main === 'Clouds') {
    const cloudsIcon = new Image();
    cloudsIcon.src = CloudsIcon;  
    cloudsIcon.classList.add('weather-icon');
    return cloudsIcon;
  } else if (element.weather[0].main === 'Drizzle') {
    const drizzleIcon = new Image();
    drizzleIcon.src = DrizzleIcon;
    drizzleIcon.classList.add('weather-icon');
    return drizzleIcon;
  } else if (element.weather[0].main === 'Rain') {
    const rainIcon = new Image();
    rainIcon.src = RainIcon;
    rainIcon.classList.add('weather-icon');
    return rainIcon;
  } else if (element.weather[0].main === 'Thunderstorm') {
    const thunderStormIcon = new Image();
    thunderStormIcon.src = ThunderStormIcon;
    thunderStormIcon.classList.add('weather-icon');
    return thunderStormIcon;
  } else if (element.weather[0].main === 'Snow') {
    const snowIcon = new Image();
    snowIcon.src = SnowIcon;
    snowIcon.classList.add('weather-icon');
    return snowIcon;
  } else if ((element.weather[0].main === 'Smoke') || (element.weather[0].main === 'Mist') || (element.weather[0].main === 'Haze') || (element.weather[0].main === 'Dust') || (element.weather[0].main === 'Fog') || (element.weather[0].main === 'Sand') || (element.weather[0].main === 'Ash') || (element.weather[0].main === 'Squall') || (element.weather[0].main === 'Tornado')) {
    const miscellaneousIcon = new Image();
    miscellaneousIcon.src = MiscIcon;
    miscellaneousIcon.classList.add('weather-icon');
    return miscellaneousIcon;
  } else {
    console.log('error in finding the weather.main response.')
  }
}

function populateForecastDisplay(element) {
  const getForcastBlock = document.querySelector('.forecast');
  const createDayBlock = document.createElement('div');
  const createTempDisplay = document.createElement('p');
  const createDateDisplay = document.createElement('p');
  createDayBlock.classList.add('day-block')
  getForcastBlock.appendChild(createDayBlock);
  createDayBlock.append(createTempDisplay, createDateDisplay, determineIcon(element));
  createTempDisplay.textContent = `${Math.round(element.main.temp)}`;
  createDateDisplay.textContent = `${format(parseJSON(element.dt_txt), 'EEEE')}`;
  return createDayBlock;
}
