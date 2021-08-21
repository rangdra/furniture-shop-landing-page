/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById('nav');
  const navMenu = document.getElementById('nav-menu');

  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 120) {
    nav.classList.add('scroll-header');
    navMenu.style.color = 'white';
  } else {
    nav.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
