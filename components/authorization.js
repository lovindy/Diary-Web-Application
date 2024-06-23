// Function to navigate to a URL
function navigateTo(url) {
  window.location.href = url;
}

// Function to handle user signup
function handleSignUp() {
  // Get user input
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  // Check if username and password are not empty
  if (username && password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((user) => user.username === username)) {
      alert("Username already exists");
      return;
    }
    // Add user to local storage
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign up successful! You can now log in.");
    navigateTo("../pages/login.html");
  } else {
    alert("Please fill out all fields.");
  }
}

// Function to handle user login
function handleLogin() {
  // Get user input
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Check if username and password are not empty
  if (username && password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    // Check if user exists
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigateTo("../pages/loading.html");
    } else {
      alert("Invalid username or password.");
    }
  } else {
    alert("Please fill out all fields.");
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

