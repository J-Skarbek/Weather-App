export function createForecastDisplay() {
  const mainContent = document.querySelector('.main-content');
  const element = document.createElement('div');
  element.classList.add('forecast');
  mainContent.appendChild(element);
  return element;  
}

function populateForecastDisplay(element) {
  const getForcastBlock = document.querySelector('.forecast');
  const createDayBlock = document.createElement('div');
  const createTempDisplay = document.createElement('p');
  getForcastBlock.appendChild(createDayBlock);
  createDayBlock.appendChild(createTempDisplay);
  createTempDisplay.textContent = `${Math.round(element.main.temp)}`;
  return createDayBlock;
}
  
export function getEveryNth(newArr, nth) {
  const results = [];
  for (let i = 0; i < newArr.length; i += nth) {
      results.push(newArr[i]);
  }
  results.forEach(element => {
      populateForecastDisplay(element);
  });
  return results;
}