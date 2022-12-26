import { determineCurrentWeatherIcon } from './displayWeatherIcon.js';

export function displayCurrentTemp(response) {
  const mainContent = document.querySelector('.main-content');
  const element = document.createElement('div');
  const currentLocation = document.createElement('h2');
  const currentWeatherDescription = document.createElement('h3');
  const currentDateTime = document.createElement('p');
  const tempDisplay = document.createElement('p');
  const feelsLikeDisplay = document.createElement('p');
  const todaysHigh = document.createElement('p');
  const todaysLow = document.createElement('p');
  element.classList.add('current-temp');
  element.append(currentLocation, currentWeatherDescription, currentDateTime, tempDisplay, feelsLikeDisplay, todaysHigh, todaysLow, determineCurrentWeatherIcon(response))
  mainContent.appendChild(element);
  currentLocation.innerText = `${response.name}`;
  currentWeatherDescription.innerText = `${response.weather[0].description}`;
  // currentDateTime.innerText = `dummy text`;
  tempDisplay.innerText = `The temp is currently ${Math.round(response.main.temp)}.`;
  feelsLikeDisplay.innerText = `Feels Like: ${Math.round(response.main.feels_like)}.`;
  todaysHigh.innerText = `Today's High: ${Math.round(response.main.temp_max)}.`;
  todaysLow.innerText = `Today's Low: ${Math.round(response.main.temp_min)}.`;
  return element;  
}

export function resetCurrentTempDisplay() {
  const getCurrentWeatherHeaders = document.querySelectorAll('.current-temp h2, .current-temp h3');
  getCurrentWeatherHeaders.forEach(header => {
    header.innerText = '';
  });

  const getCurrentTempValues = document.querySelectorAll('.current-temp p');
  getCurrentTempValues.forEach(currentTempValue => {
    currentTempValue.innerText = '';
  });
  const resetCurrentWeatherIcon = document.querySelector('.current-temp img');
  resetCurrentWeatherIcon.remove();
}
