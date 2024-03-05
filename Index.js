document.addEventListener('DOMContentLoaded', function() {
  // Get form elements
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginForm = document.getElementById('login-form');

  // Add event listener for form submission
  loginForm.addEventListener('submit', function(event) {
    // Validate email format
    if (!isValidEmail(emailInput.value)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
    }

    // Validate password format
    if (!isValidPassword(passwordInput.value)) {
      alert('Please enter a valid password. It should contain at least one uppercase letter, one number, and only allow "@" as a special character.');
      event.preventDefault();
    }
  });

  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to validate password format
  function isValidPassword(password) {
    // Password should contain at least one uppercase letter, one number, and only allow "@" as a special character.
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]+$/;
    return passwordRegex.test(password);
  }
});
