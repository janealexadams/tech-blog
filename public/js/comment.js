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
    
// delete / comment on posts 
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

// comment on post
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

// like button
const likeButton = $('.like-button')
  likeButton.on("click", function() { 
    console.log($(this))
      var likeCount = $(this).siblings(".like-counter").text();
      console.log(likeCount);
      likeCount++
      $(this).siblings(".like-counter").text(likeCount);
});


document.querySelector('#posts').addEventListener('click', checkButton)