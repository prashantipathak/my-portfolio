// =======================
// MOBILE MENU TOGGLE
// =======================

const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('open');

        // Update ARIA attribute
        const isExpanded = navLinks.classList.contains('open');
        menuButton.setAttribute('aria-expanded', isExpanded);

        // Switch icon
        menuButton.textContent = isExpanded ? '✕' : '☰';
    });

    // Close menu when a link is clicked (mobile UX improvement)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                menuButton.textContent = '☰';
                menuButton.setAttribute('aria-expanded', false);
            }
        });
    });
}



// =======================
// SCROLL PROGRESS BAR
// =======================

const scrollProgress = document.getElementById('scroll-progress');

if (scrollProgress) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / pageHeight) * 100;

        scrollProgress.style.width = scrollPercentage + '%';
    });
}



// =======================
// CONTACT FORM HANDLING
// =======================

const contactForm = document.getElementById('contact-form-id');  // FIXED ID
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

