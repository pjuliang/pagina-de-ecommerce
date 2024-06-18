// script.js

let currentImageIndex = 0;
const images = [
  './rsc/images/image-product-1.jpg',
  './rsc/images/image-product-2.jpg',
  './rsc/images/image-product-3.jpg',
  './rsc/images/image-product-4.jpg'
];

function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  
  currentImageIndex = images.indexOf(imageSrc);
  lightboxImage.src = imageSrc;
  lightbox.style.display = 'block';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}

function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  const lightboxImage = document.getElementById('lightboxImage');
  lightboxImage.src = images[currentImageIndex];
}

// Event listener to close the lightbox when clicking outside of the image
window.addEventListener('click', function(event) {
  const lightbox = document.getElementById('lightbox');
  if (event.target === lightbox) {
    closeLightbox();
  }
});
