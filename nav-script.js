document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuItems = menu.querySelectorAll('a');
    
    // Toggle menu when clicking the hamburger button
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        menu.classList.toggle('active');
        // Set position based on viewport size
        positionMenu();
    });
    
    // Close menu when clicking on a menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove('active');
        }
    });
    
    // Update menu visibility on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
        } else if (menu.classList.contains('active')) {
            positionMenu();
        }
    });
    
    // Helper function to position the menu properly
    function positionMenu() {
        if (window.innerWidth <= 768) {
            const headerHeight = document.querySelector('header').offsetHeight;
            menu.style.top = headerHeight + 'px';
        }
    }
});