// Use const for constant variables
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close the mobile menu when a nav link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Your existing scroll event logic here

    // Toggle a 'scrolled' class on the header for a sticky effect
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for header height
            behavior: 'smooth'
        });
    });
});

// Initialize ScrollReveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Specify the elements to reveal
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Add this in your existing JavaScript code

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        // Form is valid, you can proceed with form submission or other actions
        alert('Form submitted successfully!');
        this.reset(); // Optionally reset the form after submission
    }
});

function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const emailAddress = document.getElementById('emailAddress').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const emailSubject = document.getElementById('emailSubject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation example (you can add more complex validation as needed)
    if (fullName === '' || emailAddress === '' || phoneNumber === '' || emailSubject === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate phone number format (you can adjust the regex based on your needs)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid phone number (10 digits).');
        return false;
    }

    // Additional custom validations can be added here

    return true; // Form is valid
}


