export function getWeatherData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=36.16&lon=86.78&appid=18293e2178d3146f5aed1d9ca6c8609f',
    {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
    })
}