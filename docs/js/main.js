// Select DOM items
const menuButtom = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuNavigation = document.querySelector('.menu-navigation');
const menuBranding = document.querySelector('.menu-branding');
const navigationItems = document.querySelectorAll('.navigation-item');

// Set initial state of the menu
let showMenu = false;

menuButtom.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuButtom.classList.add('close');
    menu.classList.add('show');
    menuNavigation.classList.add('show');
    menuBranding.classList.add('show');
    navigationItems.forEach(item => item.classList.add('show'));

    // Set menu state
    showMenu = true;
  } else {
    menuButtom.classList.remove('close');
    menu.classList.remove('show');
    menuNavigation.classList.remove('show');
    menuBranding.classList.remove('show');
    navigationItems.forEach(item => item.classList.remove('show'));

    // Set menu state
    showMenu = false;
  }
}
