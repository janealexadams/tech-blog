// when a create post button is clicked the prompt is shown
var createPostEl = $('#createPost');
var crea
$('#createNewPostBtn').on('click', function () {
  createPostEl.removeClass('hidden');
  $('#createNewPostBtn').addClass('hidden');
});

// darkmode
$('.dark').on('click', function  () {
  var element = document.html;
  element.classList.toggle("dark-mode");

  var test = $('#createPost');
  test.style.setProperty["color"] = "white";




  
      var image_1 = $(".logo");
      var img1_src = "https://res.cloudinary.com/deqzppd4t/image/upload/v1701293667/T_7_gbabdh.png";
      var img2_src = "https://res.cloudinary.com/deqzppd4t/image/upload/v1701382022/T_9_kmt8mm.png";
        
      if (image_1.attr("src") == img1_src) {
          
          image_1.attr("src", img2_src);
        } else {
          image_1.attr("src", img1_src);
        }
    });
  
  

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
  uploadPreset: 'ftr9mywz'
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

