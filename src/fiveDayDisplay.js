import { parseJSON, format } from 'date-fns';
import ClearIcon from './icons/day.svg';

// const testIcon = new Image();
// testIcon.src = TestIcon;
// testIcon.classList.add('test-icon')


export function createForecastDisplay() {
  const mainContent = document.querySelector('.main-content');
  const element = document.createElement('div');
  element.classList.add('forecast');
  mainContent.appendChild(element);
  return element;  
}

function determineIcon(element) {
  if (element.weather.main === 'Clear') {
    const clearIcon = new Image();
    clearIcon.src = ClearIcon;
    clearIcon.classList.add('weather-icon');
  }
}

function createWeatherIcon() {
  const clearIcon = new Image();
  clearIcon.src = ClearIcon;
  clearIcon.classList.add('weather-icon');
  return clearIcon;
}

function populateForecastDisplay(element) {
  const getForcastBlock = document.querySelector('.forecast');
  const createDayBlock = document.createElement('div');
  const createTempDisplay = document.createElement('p');
  const createDateDisplay = document.createElement('p');
  // const clearIcon = new Image();
  // clearIcon.src = ClearIcon;
  // clearIcon.classList.add('weather-icon');
  // createWeatherIcon();
  getForcastBlock.appendChild(createDayBlock);
  createDayBlock.append(createTempDisplay, createDateDisplay, createWeatherIcon());
  createTempDisplay.textContent = `${Math.round(element.main.temp)}`;
  createDateDisplay.textContent = `${format(parseJSON(element.dt_txt), 'EEEE')}`;
  return createDayBlock;
}
  
export function getEveryNth(newArr, nth) {
  const results = [];
  for (let i = 0; i < newArr.length; i += nth) {
    results.push(newArr[i]);
  }
  results.forEach(element => {
    populateForecastDisplay(element);
  });
  return results;
}