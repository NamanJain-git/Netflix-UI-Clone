document.addEventListener("DOMContentLoaded", function () {

 const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  function showSignup() {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
  }

  function showLogin() {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  }

  // Toggle buttons
  document.getElementById("show-Signup").addEventListener("click", showSignup);
  document.getElementById("show-Login").addEventListener("click", showLogin);

//   function showSignup() {
//     document.getElementById("login-form").classList.add("hidden");
//     document.getElementById("signup-form").classList.remove("hidden");
//   }

//   function showLogin() {
//     document.getElementById("signup-form").classList.add("hidden");
//     document.getElementById("login-form").classList.remove("hidden");
//   }

  // Signup
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const user = { name, email, password };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! Please login.");
    showLogin();
  });

  // Login
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password");
    }
  });

});