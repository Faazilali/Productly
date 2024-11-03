// Function to handle login button click
function loginButtonClick() {
    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('errorMessage');
    
    // Hide any previous error messages
    errorDiv.style.display = 'none';
    
    // Validate if fields are empty
    if (!username || !password) {
        errorDiv.textContent = 'Please fill in all fields';
        errorDiv.style.display = 'block';
        return false;
    }
    
    // Check credentials
    if (username === "Faazil Ali" && password === "183275") {
        // Save to localStorage if Remember Me is checked
        const rememberMe = document.getElementById('remember');
        if (rememberMe && rememberMe.checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('remember', 'true');
        }
        
        // Redirect to index.html
        window.location.href = 'index.html';
        return true;
    } else {
        // Show error message
        errorDiv.textContent = 'Invalid username or password';
        errorDiv.style.display = 'block';
        
        // Clear password field
        document.getElementById('password').value = '';
        return false;
    }
}