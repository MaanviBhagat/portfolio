// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize AOS (Animate On Scroll Library)
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800, // Animation duration
        easing: 'ease-in-out', // Easing style
        once: true, // Animation happens only once
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    
}

document.getElementById('theme-toggle').addEventListener('click', () => {
    const body = document.body;
    const button = document.getElementById('theme-toggle');
    
    body.classList.toggle('dark-mode');
    
    // Change button icon based on theme
    if (body.classList.contains('dark-mode')) {
        button.textContent = '🌞'; // Sun icon for light mode
    } else {
        button.textContent = '🌙'; // Moon icon for dark mode
    }
    
    // Toggle dark mode on additional elements
    document.querySelectorAll('.navbar, .experience-card, .position-card, .project-card, .education-card')
        .forEach(el => el.classList.toggle('dark-mode'));
});

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200, // Animation duration in ms
    });
});
/*
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Toggles the entire body theme

    // Toggle dark mode for all project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.toggle('dark-mode');
    });

    // Optional: Add a toggle for navbar or other sections if needed
});
*/
