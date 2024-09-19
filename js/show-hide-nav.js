 const navbar = document.querySelector('.navbar');
 const navbarHeight = navbar.offsetHeight;
 let prevScrollPos = window.pageYOffset;

 window.onscroll = function() {
 const currentScrollPos = window.pageYOffset;
 if (prevScrollPos > currentScrollPos) {
     navbar.classList.add('show');
     navbar.classList.remove('hide');
 } else {
     navbar.classList.remove('show');
     navbar.classList.add('hide');
 }
 if (currentScrollPos >= navbarHeight) {
     navbar.classList.add('freeze');
 } else {
     navbar.classList.remove('freeze');
 }
 if (currentScrollPos === 0) {
     navbar.classList.add('show');
     navbar.classList.remove('freeze');
     navbar.classList.remove('hide');
 }
 prevScrollPos = currentScrollPos;
 }
