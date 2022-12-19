import _ from 'lodash';
import './style.css';
import { createHomePage, createHeader, createFooter } from './homePage.js';
import { getWeatherData } from './getData.js';
import { getFiveDayData } from './fiveDayForcast.js';
import { createForecastDisplay } from './fiveDayDisplay.js';

document.body.appendChild(createHeader());
document.body.appendChild(createHomePage());
document.body.appendChild(createFooter());
getWeatherData();
getFiveDayData();
createForecastDisplay();
