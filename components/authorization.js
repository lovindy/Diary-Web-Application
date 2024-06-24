// Function to navigate to a URL
function navigateTo(url) {
  window.location.href = url;
}

// Function to show error messages
function showError(message, errorElementId) {
  const errorElement = document.getElementById(errorElementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
}

// Function to clear error messages
function clearError(errorElementId) {
  const errorElement = document.getElementById(errorElementId);
  if (errorElement) {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

// Function to handle user signup
function handleSignUp(event) {
  event.preventDefault(); // Prevent default form submission

  // Clear previous error messages
  clearError("signup-error");
  clearError("signup-username-error");
  clearError("signup-email-error");
  clearError("signup-password-error");

  // Get user input
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  const email = document.getElementById("email-user").value;

  let valid = true;

  // Check if username is empty
  if (!username) {
    showError("Username is required.", "signup-username-error");
    valid = false;
  }

  // Check if email is empty
  if (!email) {
    showError("Email is required.", "signup-email-error");
    valid = false;
  }

  // Check if password is empty
  if (!password) {
    showError("Password is required.", "signup-password-error");
    valid = false;
  }

  if (valid) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((user) => user.username === username)) {
      showError("Username already exists", "signup-error");
      return;
    }
    // Add user to local storage
    users.push({ username, password, email });
    localStorage.setItem("users", JSON.stringify(users));
    showError("Sign up successful! You can now log in.", "signup-error");
    setTimeout(() => navigateTo("../pages/login.html"), 2000);
  }
}

// Function to handle user login
function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission

  // Clear previous error messages
  clearError("login-error");
  clearError("login-username-error");
  clearError("login-password-error");

  // Get user input
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  let valid = true;

  // Check if username is empty
  if (!username) {
    showError("Username is required.", "login-username-error");
    valid = false;
  }

  // Check if password is empty
  if (!password) {
    showError("Password is required.", "login-password-error");
    valid = false;
  }

  if (valid) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    // Check if user exists
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigateTo("../pages/loading.html");
    } else {
      showError("Invalid username or password.", "login-error");
    }
  }
}

// Function to check if user is authenticated
function checkAuth() {
  // Check if user is authenticated
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  // Redirect to login page if user is not authenticated
  if (!currentUser) {
    navigateTo("/pages/login.html");
  }
}

// Sign up page
if (window.location.pathname.endsWith("signup.html")) {
  document.getElementById("signupBtn").addEventListener("click", handleSignUp);
}

// Login page
if (window.location.pathname.endsWith("login.html")) {
  document.getElementById("loginBtn").addEventListener("click", handleLogin);
}
