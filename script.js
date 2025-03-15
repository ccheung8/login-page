
function signUp() {
  // gets sign up fields
  const email = document.getElementById('email');
  const username = document.getElementById('username');
  const password = document.getElementById('password');

  // sets items in localstorage
  localStorage.setItem("email", email.value);
  localStorage.setItem("username", username.value);
  localStorage.setItem("password", password.value);
  console.log(localStorage.getItem("email"));
  console.log(localStorage.getItem("username"));
  console.log(localStorage.getItem("password"));

  // redirects to login
  window.location.href = "login.html";
}

function logIn() {
  const email = document.getElementById('username'), 
    username = document.getElementById('username'),
    password = document.getElementById('password');


  // gets items in localstorage
  const emailVal = localStorage.getItem("email");
  const usernameVal = localStorage.getItem("username");
  const passwordVal = localStorage.getItem("password");

  console.log(`${emailVal}, ${usernameVal}, ${passwordVal}`);

  if ((emailVal === email.value || usernameVal === username.value) && passwordVal === password.value) {
    window.location.href = "welcome.html";
  } else {
    alert("Incorrect Login");
  }
}