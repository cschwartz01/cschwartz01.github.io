document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

// Reset menu on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth >= 600) {
        document.getElementById('menu').classList.remove('active');
    }
});