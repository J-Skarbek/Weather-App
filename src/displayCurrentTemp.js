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
  extraWeatherDetails.classList.add('current-extra-details');
  const feelsLike = document.createElement('div');
  const currentHumidity = document.createElement('div');
  const chanceOfRain = document.createElement('div');
  const windSpeed = document.createElement('div');

  const feelsLikeText = document.createElement('p');
  feelsLikeText.innerText = 'Feels Like';
  const feelsLikeNumber = document.createElement('p');
  feelsLikeNumber.innerText = `${Math.round(response.main.feels_like)}°F`;
  feelsLike.append(feelsLikeText, feelsLikeNumber);

  const humidityText = document.createElement('p');
  humidityText.innerText = 'Current Humidity';
  const humidityNumber = document.createElement('p');
  humidityNumber.innerText = `${Math.round(response.main.feels_like)}°F`;
  currentHumidity.append(humidityText, humidityNumber);

  const rainText = document.createElement('p');
  rainText.innerText = 'Current Humidity';
  const rainNumber = document.createElement('p');
  rainNumber.innerText = `${Math.round(response.main.feels_like)}°F`;
  chanceOfRain.append(rainText, rainNumber);

  const windText = document.createElement('p');
  windText.innerText = 'Current Humidity';
  const windNumber = document.createElement('p');
  windNumber.innerText = `${Math.round(response.main.feels_like)}°F`;
  windSpeed.append(windText, windNumber);

  mainContent.appendChild(extraWeatherDetails);
  extraWeatherDetails.append(feelsLike, currentHumidity, chanceOfRain, windSpeed);
  return extraWeatherDetails;
}

export function resetCurrentTempDisplay() {
  document.querySelector('.current-temp').remove();
  document.querySelector('.current-extra-details').remove();
}
