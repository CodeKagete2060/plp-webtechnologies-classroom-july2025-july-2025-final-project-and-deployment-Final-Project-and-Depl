// Toggle navigation menu for mobile
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.toggle');
    const nav = document.querySelector('nav');

    if (toggle && nav) {
        toggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields');
            } else {
                alert('Thank you for your message!');
                contactForm.reset();
            }
        });
    }

    // Simple animation on scroll (for showcase or other elements)
    window.addEventListener('scroll', function() {
        const showcase = document.querySelector('#showcase');
        if (showcase) {
            const scrolled = window.pageYOffset;
            showcase.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
        }
    });
});