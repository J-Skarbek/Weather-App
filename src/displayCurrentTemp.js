export function displayCurrentTemp(response) {
  const mainContent = document.querySelector('.main-content');
  const element = document.createElement('div');
  element.classList.add('current-temp');
  const tempDisplay = document.createElement('p');
  element.appendChild(tempDisplay);
  tempDisplay.innerText = `The temp is currently ${Math.round(response.main.temp)}.`
  mainContent.appendChild(element);
  return element;  
}
