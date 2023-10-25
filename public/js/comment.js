async function commentFormHandler(event) {
    event.preventDefault();

    const text = document.querySelector('.textarea').value.trim();

    if (text) {
        const response = await fetch('/', {
            method: 'POST',
            body: JSON.stringify({
                text
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

document.querySelector('#commentButton').addEventListener('click', commentFormHandler);