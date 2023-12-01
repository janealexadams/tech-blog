async function checkButton(event) {
    if (event.target.classList.contains('btn-submit')) {
        commentFormHandler(event.target);
    } else if (event.target.classList.contains('delete')) {
        deleteFormHandler(event.target);
    } else if (event.target.classList.contains('btn-delete')) {
        deletePostHandler(event.target);
    } else if (event.target.classList.contains('btn-update')) {
        updatePostHandler(event.target);
    }
};




// darkmode
$('.dark').on('click', function  () {
var element = document.body;
element.classList.toggle("dark-mode");

    var image_1 = $(".logo");
    var img1_src = "https://res.cloudinary.com/deqzppd4t/image/upload/v1701382022/T_9_kmt8mm.png";
    var img2_src = "https://res.cloudinary.com/deqzppd4t/image/upload/v1701293667/T_7_gbabdh.png";
      
    if (image_1.attr("src") == img1_src) {
        
        image_1.attr("src", img2_src);
      } else {
        image_1.attr("src", img1_src);
      }
  });







async function commentFormHandler(button) {
    const post_id = parseInt(button.getAttribute("data-postid"));
    const text = document.querySelector('#new-comment-'+post_id).value.trim();
    console.log(text,post_id);
    if (text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                text,
                post_id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment');
        }
    }
}

// delete comment
async function deleteFormHandler(button) {
    commentToDelete = button.parentElement;
    const response = await fetch(`/api/comments/${commentToDelete.dataset.id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

// delete post
async function deletePostHandler(button) {
    const response = await fetch(`/api/posts/${button.dataset.postid}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#posts').addEventListener('click', checkButton)





// update like count 
// window.addEventListener("DOMContentLoaded", function(e) {
// const likeButton = document.getElementsByClassName('likeButton');
// const likeCount = document.getElementsByClassName('likeCounter');
// let count = Number(likeCount.textContent);
// console.log(likeCount);
// for (let i = 0; i < likeButton.length; i++) {
// // console.log(likeButton[i]);
//     likeButton[i].addEventListener('click', () => {
//     count++;
//     console.log(count);
//     likeCount.innerText = count;
//     });;
//   }
// })
  
const likeButton = $('.likeButton')
  likeButton.on("click", function() { 
    console.log($(this))
      var likeCount = $(this).siblings(".likeCounter").text();
      console.log(likeCount);
      likeCount++
      $(this).siblings(".likeCounter").text(likeCount);
  });


// add a comment
async function commentFormHandler(button) {
    const post_id = parseInt(button.getAttribute("data-postid"));
    const text = document.querySelector('#new-comment-'+post_id).value.trim();
    console.log(text,post_id);
    if (text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                text,
                post_id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment');
        }
    }
}


// for toggle navbar on homepage
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });