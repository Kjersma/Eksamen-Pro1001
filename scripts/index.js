const toggleButton = document.querySelector('.hamburger');
const mobileMenu   = document.querySelector('.dropdown-menu');

toggleButton.addEventListener('click', () => {
  mobileMenu.open = !mobileMenu.open;
});

window.onkeydown = function (event) {
  if (event.key == "Escape") {
    mobileMenu.open = false;
   }
};




