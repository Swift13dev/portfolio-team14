// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
    // Select the contact form
    const form = document.getElementById('contactForm');

    // Only run this if the form exists on the page (so it doesn't error on other pages)
    if (form) {
        form.addEventListener('submit', function (event) {
            let isValid = true;

            // 1. Validate Name
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('is-invalid');
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameInput.classList.remove('is-invalid');
                nameError.style.display = 'none';
            }

            // 2. Validate Email (Simple Pattern Check)
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic Regex for email
            
            if (!emailPattern.test(emailInput.value.trim())) {
                emailInput.classList.add('is-invalid');
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
                emailError.style.display = 'none';
            }

            // 3. Validate Message
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (messageInput.value.trim() === '') {
                messageInput.classList.add('is-invalid');
                messageError.style.display = 'block';
                isValid = false;
            } else {
                messageInput.classList.remove('is-invalid');
                messageError.style.display = 'none';
            }

            // IF NOT VALID, PREVENT SUBMISSION
            if (!isValid) {
                event.preventDefault(); // Stop the form from sending
            }
            // If valid, the form will submit normally to Formspree
        });
    }
});