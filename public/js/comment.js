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
const likeButton = document.getElementsByClassName('likeButton');
const likeCount = document.getElementsByClassName('likeCounter');
let count = Number(likeCount.innerText);
for (let i = 0; i < likeButton.length; i++) {

    likeButton.addEventListener('click', () => {
    count++;
    likeCount.innerText = count;
    });;
  }
  

for (let i = 0; i < likeCount.length; i++) {
    let count = Number(likeCount.innerText);

    likeButton.addEventListener('click', () => {
    count++;
    likeCount.innerText = count;
    });;
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