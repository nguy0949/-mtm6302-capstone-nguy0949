let imagesDiv = document.querySelector(".saved-images");
let favouriteImages = localStorage.getItem('fImages')
if (!favouriteImages) { 
    favouriteImages = []
} else {
    favouriteImages = JSON.parse(favouriteImages)
}

if (favouriteImages.length > 0) {
    for(let i = 0; i < favouriteImages.length; i++) {
        let imageContainer= document.createElement("div");
        imageContainer.classList.add('image-card');
    
        let image = document.createElement("img");
        image.classList.add("my-image");
        image.alt = favouriteImages[i].image;
        image.src = favouriteImages[i].image;
    
        let removeIcon = document.createElement('span');
        removeIcon.classList.add("material-symbols-outlined");
        removeIcon.classList.add("remove-icon");
        removeIcon.id = i
        removeIcon.textContent = "delete";
        removeIcon.addEventListener('click', removeImage)
    
        imageContainer.appendChild(image);
        imageContainer.appendChild(removeIcon);
    
        imagesDiv.appendChild(imageContainer);
    }
} else {
    let p = document.createElement("p")
    p.textContent = "You don't have any favourite images yet"
    imagesDiv.appendChild(p);
}

function removeImage(e) {
    let favouriteImages = localStorage.getItem('fImages')
    favouriteImages = JSON.parse(favouriteImages)
    const index = e.target.id
    favouriteImages.splice(index, 1)
    localStorage.setItem('fImages', JSON.stringify(favouriteImages))
    window.location.reload()
}