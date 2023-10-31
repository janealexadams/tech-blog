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



// update post
router.put('/api/posts/:id', (req, res) => {
    Post.update(
      {
        title: req.body.title,
        code_block: req.body.code_block,
        text: req.body.text,
      },
      { 
        where: {
            id: req.params.id,
        },
      }
    )
      .then((updatedPost) => {
        res.json(updatedPost);
      })
      .catch((err) => res.json(err));
  });


// update like count based on its id
const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-counter');
let count = `${post.likes}`;

likeButton.addEventListener('click', () => {
  count++;
  likeCount.innerText = count;
});

router.put('/:id', (req, res) => {
    Post.update(
      {
        likes: req.body.likes,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedLikes) => {
        res.json(updatedLikes);
      })
      .catch((err) => res.json(err));
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