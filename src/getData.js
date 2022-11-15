export function getGeocodingData() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=Nashville&appid=18293e2178d3146f5aed1d9ca6c8609f',
    {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
    })
}
