// toggle navbar 
(function () {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
  });
})();

// create post button
var createPostEl = $('#create-post');
var crea
$('#create-new-post-btn').on('click', function () {
  createPostEl.removeClass('hidden');
  $('#create-new-post-btn').addClass('hidden');
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

document.querySelector("#submit-button").addEventListener('click', newPostHandler);
document.querySelector('#cancel-button').addEventListener('click', cancel);


