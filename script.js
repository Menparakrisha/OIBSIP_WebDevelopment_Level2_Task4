// Register Function
function register() {

  let username = document.getElementById("regUsername").value;
  let password = document.getElementById("regPassword").value;

  if(username === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Registration Successful!");

  window.location.href = "login.html";
}


// Login Function
function login() {

  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  let storedUsername = localStorage.getItem("username");
  let storedPassword = localStorage.getItem("password");

  if(username === storedUsername && password === storedPassword) {

    localStorage.setItem("loggedIn", "true");

    alert("Login Successful!");

    window.location.href = "dashboard.html";

  } else {
    alert("Invalid Username or Password");
  }
}


// Check Login Access
if(window.location.pathname.includes("dashboard.html")) {

  let loggedIn = localStorage.getItem("loggedIn");

  if(loggedIn !== "true") {
    alert("Please login first!");
    window.location.href = "login.html";
  }
}


// Logout Function
function logout() {

  localStorage.removeItem("loggedIn");

  alert("Logged Out Successfully");

  window.location.href = "login.html";
}