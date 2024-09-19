function setLightTheme() {
    $('body').removeClass('bg-dark').addClass('bg-light');
    $('li, h2, h4, h7, .navbar').removeClass('text-light').addClass('text-dark');
    $('.navbar, .navbar-toggler').removeClass('bg-dark').addClass('bg-light');
    $('.navbar-brand').removeClass('text-light').addClass('text-dark');
    $('.nav-link').removeClass('text-light').addClass('text-dark');
    $('#theme-dropdown').html('<i class="fas fa-sun"></i> Light');
    $('#about-pabrik, #about-visi, #about-misi, #profile, #product-caption, #process-caption, #process-1').removeClass('text-light').addClass('text-dark');
    $('.card').removeClass('bg-dark').addClass('bg-light');
    $('.card-title, .card-text').removeClass('text-light').addClass('text-dark');
  }
  
  function setDarkTheme() {
    $('body').removeClass('bg-light').addClass('bg-dark');
    $('li, h2, h4, h7, .navbar').removeClass('text-dark').addClass('text-light');
    $('.navbar, .navbar-toggler').removeClass('bg-light').addClass('bg-dark');
    $('.navbar-brand').removeClass('text-dark').addClass('text-light');
    $('.nav-link').removeClass('text-dark').addClass('text-light');
    $('#theme-dropdown').html('<i class="fas fa-moon"></i> Dark');
    $('#about-pabrik, #about-visi, #about-misi, #profile, #product-caption, #process-caption, #process-1').removeClass('text-dark').addClass('text-light');
    $('.card').removeClass('bg-light').addClass('bg-dark');
    $('.card-title, .card-text').removeClass('text-dark').addClass('text-light');
  }
  
  $(document).ready(function() {
    $('#light-theme-link').click(function(e) {
      e.preventDefault();
      setLightTheme();
    });
  
    $('#dark-theme-link').click(function(e) {
      e.preventDefault();
      setDarkTheme();
    });
  });
  