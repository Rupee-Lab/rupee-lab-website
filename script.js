document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.getElementById('form-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Basic email validation
        if (!email || !isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Here you would typically send the email to your backend
        // For now, we'll just show a success message
        showMessage('Thanks! We\'ll notify you when we launch.', 'success');
        emailInput.value = '';
        
        // In a real implementation, you would make an API call here:
        // fetch('/api/signup', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email: email })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     showMessage('Thanks! We\'ll notify you when we launch.', 'success');
        //     emailInput.value = '';
        // })
        // .catch(error => {
        //     showMessage('Something went wrong. Please try again.', 'error');
        // });
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = `form-message ${type}`;
        
        // Clear message after 5 seconds
        setTimeout(() => {
            messageDiv.textContent = '';
            messageDiv.className = 'form-message';
        }, 5000);
    }
});

