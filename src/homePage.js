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
  const pageTitle = document.createElement('h1');
  // const searchBox = document.createElement('div');
  // const searchInput = document.createElement('INPUT');
  // const searchSubmit = document.createElement('button');
  header.classList.add('header');
  // searchBox.classList.add('location-search');
  // searchInput.setAttribute('type', 'text');
  // searchInput.setAttribute('placeholder', 'Location...');
  pageTitle.innerText = 'Weather App - Odin Project';
  // createSearchBox();
  // searchSubmit.setAttribute('type', 'button');
  // searchSubmit.addEventListener('click', () => {
  //   console.log(`submission for ${searchInput.value}.`)
  // })
  // searchBox.append(searchInput, searchSubmit)
  header.append(pageTitle, createSearchBox())
  return header;
}

function createSearchBox() {
  const searchBox = document.createElement('div');
  const searchInput = document.createElement('INPUT');
  const searchSubmit = document.createElement('button');
  searchBox.append(searchInput, searchSubmit);
  searchBox.classList.add('location-search');
  searchSubmit.classList.add('submit-btn');
  searchSubmit.setAttribute('type', 'button');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'Location...');
  searchSubmit.addEventListener('click', () => {
    console.log(`submission for ${searchInput.value}.`);
  })
  return searchBox;
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