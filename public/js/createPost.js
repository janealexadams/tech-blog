// toggle navbar 
document.addEventListener('DOMContentLoaded', () => {

  // get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // add a click event on each of them
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

// darkmode
$('.theme-switch').on('click', function  () {

  // background
  var element = document.body;
  element.classList.toggle("light-mode");
  
  // logo change
      var image_1 = $(".logo");
      var img1_src = "https://res.cloudinary.com/deqzppd4t/image/upload/v1701382022/T_9_kmt8mm.png";
      var img2_src = "https://res.cloudinary.com/deqzppd4t/image/upload/v1701293667/T_7_gbabdh.png";
        
      if (image_1.attr("src") == img1_src) {
          
          image_1.attr("src", img2_src);
        } else {
          image_1.attr("src", img1_src);
        }
  });

// create post button
var createPostEl = $('#createPost');
var crea
$('#createNewPostBtn').on('click', function () {
  createPostEl.removeClass('hidden');
  $('#createNewPostBtn').addClass('hidden');
});


// create new post
let code_block = "";

async function newPostHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#post-title').value.trim();
  console.log(title);
  const text = document.querySelector('.textarea').value.trim();

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      code_block,
      text,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.replace('/');

  } else {
    alert('Failed to add post');
  }
}

// cloudinary upload
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'deqzppd4t',
  uploadPreset: 'ftr9mywz'
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ', result.info);
    code_block = result.info.url
    const previewImage = document.getElementById ("previewImage");
    previewImage.setAttribute ("src", code_block)
  }
})

document.getElementById("upload_widget").addEventListener("click", function (event) {
  event.preventDefault();
  myWidget.open();
}, false);


const cancel = async () => {
  const response = await fetch('/', {
    method: 'GET',
  });

  if (response.ok) {
    document.location.replace('/');
  } 
};

document.querySelector("#submitButton").addEventListener('click', newPostHandler);
document.querySelector('#cancelButton').addEventListener('click', cancel);


