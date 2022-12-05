import { getWeatherDataByName} from './getData.js';

const getLocationName = document.querySelector('.location-search input');
const value = getLocationName.value;
const searchLocations = document.querySelector('.submit-btn');

const weatherByLocationName = (value) => {
  getWeatherDataByName(value);
}

export function searchSubmissions() {
  searchLocations.addEventListener('click', weatherByLocationName)
}