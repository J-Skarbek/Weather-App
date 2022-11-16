// import { getFiveDayData } from './fiveDayForecast.js';

export function createForcastDisplay() {
  const mainContent = document.querySelector('.main-content');
  const element = document.createElement('div');
  element.classList.add('forecast');
  mainContent.appendChild(element);
  return element;  
}