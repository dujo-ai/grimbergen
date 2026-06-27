document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const numberOfPhotos = 20;
    const photo1ImagePath = 'assets/photo1.jpg'; // Path to the uploaded image

    function createPlaceholder(index) {
        const placeholderDiv = document.createElement('div');
        placeholderDiv.className = 'photo-placeholder';

        if (index === 1) {
            // Use the specific image for Photo 1
            const img = document.createElement('img');
            img.src = photo1ImagePath;
            img.alt = 'Grimbergen Photo 1';
            img.className = 'w-full h-full object-cover transition duration-300 hover:scale-[1.02]';
            placeholderDiv.appendChild(img);
        } else {
            // Use generic placeholder for the rest
            placeholderDiv.textContent = `Photo ${index}`; 
        }
        return placeholderDiv;
    }

    // Generate and append 20 placeholders
    for (let i = 1; i <= numberOfPhotos; i++) {
        const placeholder = createPlaceholder(i);
        galleryContainer.appendChild(placeholder);
    }
});