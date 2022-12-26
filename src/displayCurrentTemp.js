import { determineCurrentWeatherIcon } from './displayWeatherIcon.js';

export function displayCurrentTemp(response) {
  const mainContent = document.querySelector('.main-content');
  const currentWeatherDiv = document.createElement('div');
  const currentLocation = document.createElement('h2');
  const currentWeatherDescription = document.createElement('h3');
  const currentDateTime = document.createElement('p');
  const tempDisplay = document.createElement('p');
  const feelsLikeDisplay = document.createElement('p');
  const todaysHigh = document.createElement('p');
  const todaysLow = document.createElement('p');
  currentWeatherDiv.classList.add('current-temp');
  currentWeatherDiv.append(currentLocation, currentWeatherDescription, currentDateTime, tempDisplay, feelsLikeDisplay, todaysHigh, todaysLow, determineCurrentWeatherIcon(response))
  mainContent.appendChild(currentWeatherDiv);
  currentLocation.innerText = `${response.name}`;
  currentWeatherDescription.innerText = `${response.weather[0].description}`;
  // currentDateTime.innerText = `dummy text`;
  tempDisplay.innerText = `The temp is currently ${Math.round(response.main.temp)}.`;
  feelsLikeDisplay.innerText = `Feels Like: ${Math.round(response.main.feels_like)}.`;
  todaysHigh.innerText = `Today's High: ${Math.round(response.main.temp_max)}.`;
  todaysLow.innerText = `Today's Low: ${Math.round(response.main.temp_min)}.`;
  return currentWeatherDiv;  
}

// export function displayCurrentWeatherDetials(response) {

// }

export function resetCurrentTempDisplay() {
  document.querySelector('.current-temp').remove();
}
