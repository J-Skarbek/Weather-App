const dataKey = '18293e2178d3146f5aed1d9ca6c8609f';

export function getGeocodingData() {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Nashville&appid=${dataKey}`,
    {mode: 'cors'})
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(response) {
      console.log(`latitude = ${response[0].lat} and longitude is = ${response[0].lon}`)
      console.log(response);
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${response[0].lat}&lon=${response[0].lon}&appid=${dataKey}`,
      {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response)
      })
    })
}

