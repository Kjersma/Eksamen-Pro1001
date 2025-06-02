
 const toggleButton = document.querySelector('.hamburger');
  const closeButton  = document.querySelector('.close');
  const mobileMenu   = document.querySelector('.dropdown-menu');
   const cartButton   = document.querySelector('.green-button');
     const addButtons = document.querySelectorAll('.add-to-basket');

  // Åpne/lukke dialogen når hamburger-knappen klikkes
  toggleButton.addEventListener('click', () => {
    mobileMenu.open = !mobileMenu.open;
  });

  // Escape
  window.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      mobileMenu.open = false;
    }
  });

  // ×"-knappen
  closeButton.addEventListener('click', () => {
    mobileMenu.open = false;
  });

// Handlekurv
  let cartCount = 0;
  addButtons.forEach(button => {
      button.addEventListener('click', () => {
        cartCount += 1;
        cartButton.textContent = cartCount;
      });
    });
