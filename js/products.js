// Slackwater Supply Product Gallery

const images = [
    "images/heroshot.png",
    "images/interiorshot.png",
    "images/secureshot.png"
];

let currentImage = 0;

const galleryImage =
document.getElementById("gallery-image");

const nextButton =
document.getElementById("next-image");

const prevButton =
document.getElementById("prev-image");

if (galleryImage && nextButton && prevButton) {

    nextButton.addEventListener("click", () => {

        currentImage =
            (currentImage + 1) % images.length;

        galleryImage.src =
            images[currentImage];

    });

    prevButton.addEventListener("click", () => {

        currentImage =
            (currentImage - 1 + images.length)
            % images.length;

        galleryImage.src =
            images[currentImage];

    });

}