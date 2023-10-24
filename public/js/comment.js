async function commentFormHandler(event) {
    event.preventDefault();

    const text = document.querySelector('textarea[class="textarea"]').value.trim();

    if (text) {
        const response = await fetch('/api/comments', {
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
            alert(response.statusText);
        }
    }
}

document.querySelector('.textarea').addEventListener('submit', commentFormHandler);