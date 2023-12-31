// Create new post
let code_block = "";

async function newPostHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#post-title').value.trim();
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

// Cloudinary upload
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


