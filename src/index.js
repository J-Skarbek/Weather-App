import _ from 'lodash';
import './style.css';
import { createHomePage } from './homePage.js';
import { getWeatherData } from './getData.js';
import { displayCurrentTemp } from './displayCurrentTemp.js';
import { getFiveDayData } from './fiveDayForcast.js';
import { createForecastDisplay } from './fiveDayDisplay.js';

document.body.appendChild(createHomePage());
getWeatherData();
displayCurrentTemp();
getFiveDayData();
createForecastDisplay();

