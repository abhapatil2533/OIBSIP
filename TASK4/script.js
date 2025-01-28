// script.js

function register() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  if (username && password) {
    localStorage.setItem(username, password);
    alert("Registration successful!");
    showLogin();
  } else {
    alert("Please fill in all fields!");
  }
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (localStorage.getItem(username) === password) {
    alert("Login successful!");
    showSecurePage();
  } else {
    alert("Invalid username or password!");
  }
}

function logout() {
  alert("You have been logged out.");
  showLogin();
}

function showLogin() {
  document.getElementById("register").classList.add("hidden");
  document.getElementById("secure-page").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function showSecurePage() {
  document.getElementById("register").classList.add("hidden");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("secure-page").classList.remove("hidden");
}
