// Grab Elements
const selectElement = selector => {
  const element = document.querySelector(selector)
  if(element) return element;
  throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};

// Nav Styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement('#header');
  if(this.scrollY >= 15){
    headerElement.classList.add('activated');
  }else{
    headerElement.classList.remove('activated');
  }
};

window.addEventListener('scroll', scrollHeader);

// Open Menu And Search Pop Up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close Search Form Pop Up
const openFormBtn = selectElement('#search-icon');
const closeFormBtn = selectElement('#form-close-btn');
const searchContainer = selectElement('#search-form-container');

openFormBtn.addEventListener('click', () => searchContainer.classList.add('activated'));

closeFormBtn.addEventListener('click', () => searchContainer.classList.remove('activated'));

// - - Close the search form pop up on esp keypress
window.addEventListener('keyup', event => {
  if(event.key === 'Escape') searchContainer.classList.remove('activated');
});

// Switch theme/add to local storage
const bodyElement = document.body;
const toggleThemeBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
  bodyElement.classList.add('light-theme');
}

toggleThemeBtn.addEventListener('click', () =>{
  bodyElement.classList.toggle('light-theme');

  if(bodyElement.classList.contains('light-theme')){
    localStorage.setItem('currentTheme', 'themeActive');
  }else{
    localStorage.removeItem('currentTheme');
  }
});

// Swiper
const swiper = Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
