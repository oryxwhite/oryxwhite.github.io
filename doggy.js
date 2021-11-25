const img = document.querySelector('img')
fetch('https://random.dog/woof.json')
    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
        img.src=response.url
    })