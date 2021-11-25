const img = document.querySelector('img')
fetch('https://random.dog/woof.json')
    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
        let displayImg = document.createElement("img")
        displayImg.className = "dogpic";
        displayImg.src = response.url;

        let displayVid = document.createElement("video");
        displayVid.className = 'dogpic';
        displayVid.autoplay = true;
        displayVid.src = response.url
        displayVid.muted = true;

        let ext = response.url.split('.').pop();
        if(ext === 'mp4') {
            document.getElementById("maincont").appendChild(displayVid);

        } else {
            document.getElementById("maincont").appendChild(displayImg);
        }
    })
