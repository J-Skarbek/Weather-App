import { determineCurrentWeatherIcon } from './displayWeatherIcon.js';
import Thermometer from './icons/feels-like-white.svg';
import HighTemp from './icons/high-temperature-white.svg';
import LowTemp from './icons/low-temperature-white.svg';
import Humidity from './icons/humidity-white.svg';
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
  const dailyHigh = document.createElement('div');
  const dailyHigh2 = document.createElement('div');
  const dailyLow = document.createElement('div');
  const dailyLow2 = document.createElement('div');
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
  humidityNumber.innerText = `${Math.round(response.main.humidity)}%`;
  currentHumidity2.append(humidityText, humidityNumber);
  currentHumidity.append(humidityIcon, currentHumidity2);

  const highTempText = document.createElement('p');
  const highTempIcon = new Image();
  highTempIcon.src = HighTemp;
  highTempIcon.classList.add('extra-detail-icon');
  highTempText.innerText = 'Daily High';
  const highTempNumber = document.createElement('p');
  highTempNumber.innerText = `${Math.round(response.main.temp_max)}°F`;
  dailyHigh2.append(highTempText, highTempNumber);
  dailyHigh.append(highTempIcon, dailyHigh2);

  const lowTempText = document.createElement('p');
  const lowTempIcon = new Image();
  lowTempIcon.src = LowTemp;
  lowTempIcon.classList.add('extra-detail-icon');
  lowTempText.innerText = 'Daily Low';
  const lowTempNumber = document.createElement('p');
  lowTempNumber.innerText = `${Math.round(response.main.temp_min)}°F`;
  dailyLow2.append(lowTempText, lowTempNumber);
  dailyLow.append(lowTempIcon, dailyLow2);

  const windText = document.createElement('p');
  const windIcon = new Image();
  windIcon.src = Wind;
  windIcon.classList.add('extra-detail-icon');
  windText.innerText = 'Wind Speed';
  const windNumber = document.createElement('p');
  windNumber.innerText = `${Math.round(response.wind.speed)}mph`;
  windSpeed2.append(windText, windNumber);
  windSpeed.append(windIcon, windSpeed2);

  mainContent.appendChild(extraWeatherDetails);
  extraWeatherDetails.append(feelsLike, currentHumidity, dailyHigh, dailyLow, windSpeed);
  // return extraWeatherDetails;
}

export function resetCurrentTempDisplay() {
  document.querySelector('.current-temp').remove();
  document.querySelector('.current-extra-details').remove();
}
