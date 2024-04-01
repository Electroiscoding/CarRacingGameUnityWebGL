function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var validEmail = "botmaker583@gmail.com";
    var validPassword = "itsoham";

    // Check if the entered credentials match the valid credentials
    if (username === validEmail && password === validPassword) {
        // Redirect to admin dashboard or perform other actions
        alert('Login successful! Redirecting to admin dashboard...');
        window.location.href = 'admin_dashboard.html';
    } else {
        // Show error message if credentials are incorrect
        alert('Invalid email or password. Please try again.');
    }
}
