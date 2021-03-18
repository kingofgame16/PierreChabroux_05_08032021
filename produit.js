const inHtml = document.getElementById('main');
const params = new URLSearchParams(window.location.search);


fetch(`http://localhost:3000/api/furniture/${params.get('id')}`)
    .then(response => {
        if (response.ok) {
            return data = response.json()
        } else {
            Promise.reject(response.status);
        };
    })