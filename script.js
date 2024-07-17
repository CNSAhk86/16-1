// script.js
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', function() {
        window.location.href = '#novel';
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});