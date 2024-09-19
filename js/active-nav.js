// Get all nav items
const navItems = document.querySelectorAll('.nav-item');

// Add event listener to each nav item
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all nav items
    navItems.forEach(item => {
      item.classList.remove('active');
    });
    
    // Add active class to clicked nav item
    item.classList.add('active');
  });
});
