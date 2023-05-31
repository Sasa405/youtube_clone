document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
  
    navbarToggle.addEventListener('change', function() {
      if (this.checked) {
        navbarMenu.classList.add('open');
      } else {
        navbarMenu.classList.remove('open');
      }
    });
  });
  