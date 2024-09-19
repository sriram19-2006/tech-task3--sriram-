const images = [
    'images/image1.jpg', // Correct path to your images
    'images/image2.jpg',
    'images/5128.jpg'
];

let currentImageIndex = 0;
const slideshowImage = document.querySelector('.slideshow-image');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideshowImage.src = images[currentImageIndex];
}

// Change the image every 5 seconds (5000 milliseconds)
setInterval(changeImage, 5000);
