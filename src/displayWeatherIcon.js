export function displayWeatherIcon(response) {
  if (response.weather[0].main === 'Rain') {
    console.log(true)
  } else {
    console.log('something fucked up')
  }
  response.weather[0].main === 'Clouds' ? console.log('it rains') : console.log(`it does not rain, instead it ${response.weather[0].main}`);
}