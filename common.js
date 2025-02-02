 // Get the navbar element
 const navbar = document.querySelector('.navbar');
 let lastScrollTop = 0;

 // Listen to the scroll event
 window.addEventListener('scroll', function() {
     let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

     // Check if user is scrolling down or up
     if (currentScroll > lastScrollTop) {
         // Scrolling down, hide navbar
         navbar.classList.add('hide-navbar');
     } else {
         // Scrolling up, show navbar
         navbar.classList.remove('hide-navbar');
     }

     // Add scrolled class when scrolled down a bit (optional, for navbar background change)
     if (currentScroll > 100) {
         navbar.classList.add('scrolled');
     } else {
         navbar.classList.remove('scrolled');
     }

     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
 });