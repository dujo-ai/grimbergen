document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const numberOfPhotos = 20;

    function createPlaceholder() {
        const placeholderDiv = document.createElement('div');
        placeholderDiv.className = 'photo-placeholder';
        // Display a placeholder number to indicate it's one of the 20 slots
        placeholderDiv.textContent = 'Photo Placeholder'; 
        return placeholderDiv;
    }

    // Generate and append 20 placeholders
    for (let i = 1; i <= numberOfPhotos; i++) {
        const placeholder = createPlaceholder();
        // Optionally, you could update the text to show the index:
        placeholder.textContent = `Photo ${i}`; 
        galleryContainer.appendChild(placeholder);
    }
});