export function createHomePage() {
  const mainWrapper = document.createElement('div');
  mainWrapper.classList.add('main-wrapper');
  const element = document.createElement('div');
  element.classList.add('main-content');
  mainWrapper.appendChild(element)
  return mainWrapper;
}
export function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header');
  const pageTitle = document.createElement('h1')
  pageTitle.innerText = 'Weather App - Odin Project'
  header.appendChild(pageTitle);
  return header;
}

export function createFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  const footerText1 = document.createElement('p')
  footerText1.innerText = 'Created by John Skarbek';
  const footerText2 = document.createElement('p');
  footerText2.innerText = 'Date: November 2022'
  const footerText3 = document.createElement('p');
  footerText3.innerText = 'Check out my Github here.'
  footer.append(footerText1, footerText2, footerText3);
  return footer;
}