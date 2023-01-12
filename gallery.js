
function populateGallery(data){
    let container = document.getElementById("container");
    data.forEach(element => {
        const div = document.createElement("div");
        div.className = "gallery-entry-container";
        div.innerHTML = `
                <div class="gallery-entry">
                    <img src="${element.title_image}" class="entry-image">
                    <a class="entry-overlay" href="${element.link}" alt="${element.title_image}">
                        ${element.title}
                    </a>
                </div>
        `
        container.appendChild(div);
    });
}

onload = (event) => {
    let url = 'https://raw.githubusercontent.com/ChocolateChipKookie/chocolatechipkookie.github.io/main/files/gallery_metadata.json';
    fetch(url)
        .then(res => res.json())
        .then(populateGallery)
        .catch(err => { throw err });
}