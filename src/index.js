import _ from 'lodash';
import './style.css';
import { createHomePage, createHeader, createFooter } from './homePage.js';
import { getWeatherData } from './getData.js';
import { getFiveDayData } from './fiveDayForcast.js';
import { createForecastDisplay } from './fiveDayDisplay.js';
import { addListeners } from './listeners.js';
import { getCoords } from './getLocation.js';

document.body.appendChild(createHeader());
document.body.appendChild(createHomePage());
document.body.appendChild(createFooter());
// document.querySelector('.main-content').append(getWeatherData, createForecastDisplay)
// getCoords();
getWeatherData();
getFiveDayData();
createForecastDisplay();
addListeners();


