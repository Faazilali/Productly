// First, add an ID to the signup button in your HTML
document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const signupButton = document.getElementById('signupButton');

    // Validation functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateUsername(username) {
        return username.length >= 3 && username.length <= 20;
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    // Display error message function
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId + 'Error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    // Clear error message function
    function clearErrors() {
        const errorElements = document.getElementsByClassName('error');
        Array.from(errorElements).forEach(element => {
            element.textContent = '';
            element.style.display = 'none';
        });
    }

    // Add click event listener to signup button
    signupButton.onclick = function(e) {
        e.preventDefault(); // Prevent form submission
        
        // Clear previous error messages
        clearErrors();
        
        // Flag to track validation
        let isValid = true;

        // Validate email
        if (!emailInput.value.trim()) {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate username
        if (!usernameInput.value.trim()) {
            showError('username', 'Username is required');
            isValid = false;
        } else if (!validateUsername(usernameInput.value)) {
            showError('username', 'Username must be between 3 and 20 characters');
            isValid = false;
        }

        // Validate password
        if (!passwordInput.value) {
            showError('password', 'Password is required');
            isValid = false;
        } else if (!validatePassword(passwordInput.value)) {
            showError('password', 'Password must be at least 8 characters long');
            isValid = false;
        }

        // If all validations pass
        if (isValid) {
            try {
                // Store user data (except password) in localStorage
                const userData = {
                    email: emailInput.value,
                    username: usernameInput.value,
                    signupDate: new Date().toISOString()
                };
                localStorage.setItem('userData', JSON.stringify(userData));

                // Show success message
                alert('Signup successful! Welcome ' + usernameInput.value);

                // Redirect to index.html
                window.location.href = 'index.html';
            } catch (error) {
                console.error('Error during signup:', error);
                alert('An error occurred. Please try again.');
            }
        }
    };
});