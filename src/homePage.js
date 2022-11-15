import printMe from './print.js';

export function createHomePage() {
  const element = document.createElement('div');
  element.classList.add('main-content');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}
