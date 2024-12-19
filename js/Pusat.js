// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const header = document.querySelector('.header');

    document.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
    
      if (scrollPosition > 50) {
        header.style.background = 'rgb(235, 227, 213)';
      } else {
        header.style.background = 'transparent'; 
      }

      header.style.transition = 'background 0.3s ease';
    });
}