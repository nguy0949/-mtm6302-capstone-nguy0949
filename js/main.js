const images = ["image1", "image2", "image3", "image4", "image5", "image6"];
let imagesDiv = document.querySelector(".saved-images");

for(img of images) {
    let imageContainer= document.createElement("div");
    imageContainer.classList.add('image-card');

    let image = document.createElement("img");
    image.classList.add("my-image");
    image.alt = img;
    image.src = img;

    let removeIcon = document.createElement('span');
    removeIcon.classList.add("material-symbols-outlined");
    removeIcon.classList.add("remove-icon");
    removeIcon.textContent = "delete";

    imageContainer.appendChild(image);
    imageContainer.appendChild(removeIcon);

    imagesDiv.appendChild(imageContainer);
}