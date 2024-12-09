const API_KEY = 'rWm8e-sgoIhwVWr4XhV3imbopxOY7aJdoI8ylvrfNj4';
const unsplashURL = `https://api.unsplash.com/photos/random?count=8&client_id=${API_KEY}`; // Now fetches 8 images

// Fetch random images from Unsplash
async function fetchUnsplashImages() {
    try {
        const response = await fetch(unsplashURL);
        const images = await response.json();

        // Set the main image to the first image
        document.getElementById('main-image').src = images[0].urls.regular;

        // Inject thumbnail images into the carousel
        const thumbnailContainer = document.getElementById('thumbnail-container');
        thumbnailContainer.innerHTML = ''; // Clear existing thumbnails

        images.forEach((image, index) => {
            // Create the thumbnail image element
            const thumbnail = document.createElement('img');
            thumbnail.src = image.urls.thumb; // Set thumbnail size image
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.classList.add('thumbnail');

            // Add click event to change the main image
            thumbnail.addEventListener('click', () => {
                document.getElementById('main-image').src = image.urls.regular;
            });

            // Append thumbnail to the container
            thumbnailContainer.appendChild(thumbnail);
        });
    } catch (error) {
        console.error('Error fetching images from Unsplash:', error);
    }
}

// Scroll the thumbnails left or right
function scrollThumbnails(direction) {
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const scrollAmount = 120;

    if (direction === 'left') {
        if (thumbnailContainer.scrollLeft <= 0) {
            thumbnailContainer.scrollLeft = thumbnailContainer.scrollWidth;
        } else {
            thumbnailContainer.scrollLeft -= scrollAmount;
        }
    } else if (direction === 'right') {
        if (thumbnailContainer.scrollLeft + thumbnailContainer.clientWidth >= thumbnailContainer.scrollWidth) {
            thumbnailContainer.scrollLeft = 0;
        } else {
            thumbnailContainer.scrollLeft += scrollAmount;
        }
    }
}

function addToCart() {
    let quantity = document.getElementById("quantity").value;
    let confirmationMessage = document.getElementById("confirmation-message");

    // Show confirmation message
    confirmationMessage.style.display = 'block';
    confirmationMessage.textContent = `Product added to cart! Quantity: ${quantity}`;

    // Hide the message after 3 seconds
    setTimeout(() => {
        confirmationMessage.style.display = 'none';
    }, 3000);
}

// Fetch images on page load
window.onload = fetchUnsplashImages;
