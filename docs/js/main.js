// Menu variables (will be set during initialization)
let menuButton;
let menu;
let menuNavigation;
let navigationItems;

// Set initial state of the menu
let showMenu = false;

// Initialize the menu when the relevant DOM elements are present
function initMenu() {
  menuButton = document.querySelector('.menu-button');
  menu = document.querySelector('.menu');
  menuNavigation = document.querySelector('.menu-navigation');
  navigationItems = document.querySelectorAll('.navigation-item');

  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }

  // close menu when a navigation link is clicked (mobile)
  if (navigationItems) {
    navigationItems.forEach(item => {
      const link = item.querySelector('a');
      if (link) {
        link.addEventListener('click', () => {
          if (showMenu) {
            toggleMenu();
          }
        });
      }
    });
  }
}

// In case the header is already in the DOM when this script runs
if (document.readyState !== 'loading') {
  initMenu();
} else {
  document.addEventListener('DOMContentLoaded', initMenu);
}

function toggleMenu() {
  if (!showMenu) {
    menuButton.classList.add('close');
    menu.classList.add('show');
    menuNavigation.classList.add('show');
    navigationItems.forEach(item => item.classList.add('show'));

    // Set menu state
    showMenu = true;
  } else {
    menuButton.classList.remove('close');
    menu.classList.remove('show');
    menuNavigation.classList.remove('show');
    navigationItems.forEach(item => item.classList.remove('show'));

    // Set menu state
    showMenu = false;
  }
}
