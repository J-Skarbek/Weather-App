import { determineCurrentWeatherIcon } from './displayWeatherIcon.js';
import Thermometer from './icons/feels-like-white.svg';
import Humidity from './icons/humidity-white.svg';
import Rain from './icons/chance-of-rain-white.svg';
import Wind from './icons/wind-icon-white.svg';

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
  const feelsLike2 = document.createElement('div');
  const currentHumidity = document.createElement('div');
  const currentHumidity2 = document.createElement('div');
  const chanceOfRain = document.createElement('div');
  const chanceOfRain2 = document.createElement('div');
  const windSpeed = document.createElement('div');
  const windSpeed2 = document.createElement('div');

  const feelsLikeText = document.createElement('p');
  const feelsLikeIcon = new Image();
  feelsLikeIcon.src = Thermometer;
  feelsLikeIcon.classList.add('extra-detail-icon');
  feelsLikeText.innerText = 'Feels Like';
  const feelsLikeNumber = document.createElement('p');
  feelsLikeNumber.innerText = `${Math.round(response.main.feels_like)}°F`;
  feelsLike2.append(feelsLikeText, feelsLikeNumber);
  feelsLike.append(feelsLikeIcon, feelsLike2);


  const humidityText = document.createElement('p');
  const humidityIcon = new Image();
  humidityIcon.src = Humidity;
  humidityIcon.classList.add('extra-detail-icon');
  humidityText.innerText = 'Current Humidity';
  const humidityNumber = document.createElement('p');
  humidityNumber.innerText = `${Math.round(response.main.feels_like)}°F`;
  currentHumidity2.append(humidityText, humidityNumber);
  currentHumidity.append(humidityIcon, currentHumidity2);

  const rainText = document.createElement('p');
  const rainIcon = new Image();
  rainIcon.src = Rain;
  rainIcon.classList.add('extra-detail-icon');
  rainText.innerText = 'Current Humidity';
  const rainNumber = document.createElement('p');
  rainNumber.innerText = `${Math.round(response.main.feels_like)}°F`;
  chanceOfRain2.append(rainText, rainNumber);
  chanceOfRain.append(rainIcon, chanceOfRain2);

  const windText = document.createElement('p');
  const windIcon = new Image();
  windIcon.src = Wind;
  windIcon.classList.add('extra-detail-icon');
  windText.innerText = 'Current Humidity';
  const windNumber = document.createElement('p');
  windNumber.innerText = `${Math.round(response.main.feels_like)}°F`;
  windSpeed2.append(windText, windNumber);
  windSpeed.append(windIcon, windSpeed2);

  mainContent.appendChild(extraWeatherDetails);
  extraWeatherDetails.append(feelsLike, currentHumidity, chanceOfRain, windSpeed);
  return extraWeatherDetails;
}

export function resetCurrentTempDisplay() {
  document.querySelector('.current-temp').remove();
  document.querySelector('.current-extra-details').remove();
}
