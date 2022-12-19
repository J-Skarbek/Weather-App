import ClearIcon from './icons/day.svg';
import CloudsIcon from './icons/cloudy.svg';
import DrizzleIcon from './icons/rainy-4.svg';
import RainIcon from'./icons/rainy-5.svg';
import ThunderStormIcon from './icons/rainy-6.svg';
import SnowIcon from './icons/snowy-3.svg';
import MiscIcon from './icons/weather.svg';

export function determineCurrentWeatherIcon(response) {
  if (response.weather[0].main === 'Clear') {
    const clearIcon = new Image();
    clearIcon.src = ClearIcon;
    clearIcon.classList.add('current-weather-icon');
    return clearIcon;
  } else if (response.weather[0].main === 'Clouds') {
    const cloudsIcon = new Image();
    cloudsIcon.src = CloudsIcon;  
    cloudsIcon.classList.add('current-weather-icon');
    return cloudsIcon;
  } else if (response.weather[0].main === 'Drizzle') {
    const drizzleIcon = new Image();
    drizzleIcon.src = DrizzleIcon;
    drizzleIcon.classList.add('current-weather-icon');
    return drizzleIcon;
  } else if (response.weather[0].main === 'Rain') {
    const rainIcon = new Image();
    rainIcon.src = RainIcon;
    rainIcon.classList.add('current-weather-icon');
    return rainIcon;
  } else if (response.weather[0].main === 'Thunderstorm') {
    const thunderStormIcon = new Image();
    thunderStormIcon.src = ThunderStormIcon;
    thunderStormIcon.classList.add('current-weather-icon');
    return thunderStormIcon;
  } else if (response.weather[0].main === 'Snow') {
    const snowIcon = new Image();
    snowIcon.src = SnowIcon;
    snowIcon.classList.add('current-weather-icon');
    return snowIcon;
  } else if ((response.weather[0].main === 'Smoke') || (response.weather[0].main === 'Mist') || (response.weather[0].main === 'Haze') || (response.weather[0].main === 'Dust') || (response.weather[0].main === 'Fog') || (response.weather[0].main === 'Sand') || (response.weather[0].main === 'Ash') || (response.weather[0].main === 'Squall') || (response.weather[0].main === 'Tornado')) {
    const miscellaneousIcon = new Image();
    miscellaneousIcon.src = MiscIcon;
    miscellaneousIcon.classList.add('current-weather-icon');
    return miscellaneousIcon;
  } else {
    console.log('error in finding the weather.main response.')
  }
}