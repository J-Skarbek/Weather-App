export function displayCurrentTemp() {
  const mainContent = document.querySelector('.main-content');
  const element = document.createElement('div');
  element.classList.add('current-temp');
  mainContent.appendChild(element);
  return element;  
}
