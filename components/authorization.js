// Function to handle user signup
function handleSignUp() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (username && password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((user) => user.username === username)) {
      alert("Username already exists");
      return;
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign up successful! You can now log in.");
    navigateTo("login.html");
  } else {
    alert("Please fill out all fields.");
  }
}

// Function to handle user login
function handleLogin() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username && password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigateTo("../index.html");
    } else {
      alert("Invalid username or password.");
    }
  } else {
    alert("Please fill out all fields.");
  }
}

// Function to check if user is authenticated
function checkAuth() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    navigateTo("pages/login.html");
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
