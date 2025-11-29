// ----- Contact Form Handling -----
const contactForm = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const messageInput = document.getElementById('message').value.trim();

        if (!nameInput || !emailInput || !messageInput) {
            messageDiv.textContent = 'Please fill out all required fields.';
            messageDiv.style.color = 'red';
        } else {
            messageDiv.textContent = 'Your inquiry has been submitted successfully.';
            messageDiv.style.color = 'green';
            contactForm.reset();
        }
    });
}

