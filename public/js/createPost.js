
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

document.querySelector("#submitButton").addEventListener('click', newPostHandler);

var myWidget = cloudinary.createUploadWidget({
  cloudName: 'deqzppd4t',
  uploadPreset: 'tjj6snc6'
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ', result.info);
    code_block = result.info.url
    const previewImage = document.getElementById ("previewImage");
    previewImage.setAttribute ("src", code_block)
  }
}
)


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



document.querySelector('#cancelButton').addEventListener('click', cancel);
