import _ from 'lodash';
import './style.css';
import { createHomePage } from './homePage.js';
import { getWeatherData } from './getData.js';
import { getFiveDayData } from './fiveDayForcast.js';
import { createForcastDisplay } from './fiveDayDisplay.js';
// import TestImg from './images/test-image.png';
// import printMe from './print.js';

// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');
//   const testImg = new Image();
//   testImg.src = TestImg;

//   element.appendChild(testImg);
//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

document.body.appendChild(createHomePage());
getWeatherData();
getFiveDayData();
createForcastDisplay();
