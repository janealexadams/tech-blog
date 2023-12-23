// Toggle navbar 
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
});

// Lightmode
$('.theme-switch').on('click', function  () {

  // Background
  var element = document.body;
  element.classList.toggle("light-mode");
  
  // Logo change
      var image_1 = $(".logo");
      var img1_src = "https://res.cloudinary.com/deqzppd4t/image/upload/v1701382022/T_9_kmt8mm.png";
      var img2_src = "https://res.cloudinary.com/deqzppd4t/image/upload/v1701293667/T_7_gbabdh.png";
        
      if (image_1.attr("src") == img1_src) {
          
          image_1.attr("src", img2_src);
        } else {
          image_1.attr("src", img1_src);
        }
});

// Sign in vs Sign up
var firstContainer = $('.first-container');
var secondContainer = $('.second-container');
$('#no-account-btn').on('click', function () {
  secondContainer.removeClass('hidden');
  firstContainer.addClass('hidden');
});

var firstContainer = $('.first-container');
var secondContainer = $('.second-container');
$('.has-account-btn').on('click', function () {
  secondContainer.addClass('hidden');
  firstContainer.removeClass('hidden');
});

// Sign in
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the homepage
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

// Sign up
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};
  
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
  
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
  