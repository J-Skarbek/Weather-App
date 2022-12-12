import _ from 'lodash';
import './style.css';
import { createHomePage, createHeader, createFooter } from './homePage.js';
import { getWeatherData } from './getData.js';
import { getFiveDayData } from './fiveDayForcast.js';
import { createForecastDisplay } from './fiveDayDisplay.js';
import { formatDistance, subDays } from 'date-fns';

console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }));

// import { searchSubmissions } from './listeners.js';
// import { getCoords } from './getLocation.js';
// import { displayWeatherIcon } from './displayWeatherIcon.js';

document.body.appendChild(createHeader());
document.body.appendChild(createHomePage());
document.body.appendChild(createFooter());
getWeatherData();
getFiveDayData();
createForecastDisplay();
// searchSubmissions();
// displayWeatherIcon(response);

// getCoords();

