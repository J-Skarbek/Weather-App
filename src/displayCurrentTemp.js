import { determineCurrentWeatherIcon } from './displayWeatherIcon.js';

export function displayCurrentTemp(response) {
  const mainContent = document.querySelector('.main-content');
  const currentWeatherDiv = document.createElement('div');
  const currentLocation = document.createElement('h2');
  const currentWeatherDescription = document.createElement('h3');
  const currentDateTime = document.createElement('p');
  const tempDisplay = document.createElement('p');
  currentWeatherDiv.classList.add('current-temp');
  tempDisplay.classList.add('current-temp-reading')
  currentWeatherDiv.append(currentLocation, currentWeatherDescription, currentDateTime, tempDisplay, determineCurrentWeatherIcon(response));
  mainContent.append(currentWeatherDiv);
  currentLocation.innerText = `${response.name}`;
  currentWeatherDescription.innerText = `${response.weather[0].description}`;
  tempDisplay.innerText = `${Math.round(response.main.temp)}°F`;
  return currentWeatherDiv;  
}

export function displayExtraDetails(response) {
  const mainContent = document.querySelector('.main-content');
  const extraWeatherDetails = document.createElement('div');
  const feelsLikeDisplay = document.createElement('p');
  const todaysHigh = document.createElement('p');
  const todaysLow = document.createElement('p');
  feelsLikeDisplay.innerText = `Feels Like: ${Math.round(response.main.feels_like)}°F`;
  todaysHigh.innerText = `Today's High: ${Math.round(response.main.temp_max)}°F`;
  todaysLow.innerText = `Today's Low: ${Math.round(response.main.temp_min)}°F`;
  extraWeatherDetails.classList.add('current-extra-details');
  mainContent.appendChild(extraWeatherDetails);
  extraWeatherDetails.append(feelsLikeDisplay, todaysHigh, todaysLow);
  return extraWeatherDetails;
}

export function resetCurrentTempDisplay() {
  document.querySelector('.current-temp').remove();
  document.querySelector('.current-extra-details').remove();
}
