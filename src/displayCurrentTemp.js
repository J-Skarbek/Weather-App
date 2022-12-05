export function displayCurrentTemp(response) {
  const mainContent = document.querySelector('.main-content');
  const element = document.createElement('div');
  const tempDisplay = document.createElement('p');
  const feelsLikeDisplay = document.createElement('p');
  const todaysHigh = document.createElement('p');
  const todaysLow = document.createElement('p');
  element.classList.add('current-temp');
  element.append(tempDisplay, feelsLikeDisplay, todaysHigh, todaysLow)
  // element.appendChild(tempDisplay);
  // element.appendChild(feelsLikeDisplay);
  // element.appendChild(todaysHigh);
  // element.appendChild(todaysLow);
  mainContent.appendChild(element);
  tempDisplay.innerText = `The temp is currently ${Math.round(response.main.temp)}.`;
  feelsLikeDisplay.innerText = `Feels Like: ${Math.round(response.main.feels_like)}.`;
  todaysHigh.innerText = `Today's High: ${Math.round(response.main.temp_max)}.`;
  todaysLow.innerText = `Today's Low: ${Math.round(response.main.temp_min)}.`;
  return element;  
}
