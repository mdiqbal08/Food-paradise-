// Add any JavaScript functionality you might want here
document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
// Form submission handling
const form = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add functionality to send this data to a server or API

    // Show response message
    formResponse.textContent = `Thank you for your message, ${name}!`;
    formResponse.classList.remove('hidden');

    // Reset form
    form.reset();
});
});