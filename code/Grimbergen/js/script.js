document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const numberOfPhotos = 20;

    function createPlaceholder(index) {
        const placeholderDiv = document.createElement('div');
        // Assign ID as requested: photo1, photo2, ..., photo20
        placeholderDiv.id = `photo${index}`; 
        placeholderDiv.className = 'photo-placeholder bg-gray-200 flex items-center justify-center h-48 rounded-lg shadow transition duration-300 hover:shadow-xl';
        // Display generic placeholder text for all slots, as requested to delete the specific image logic.
        placeholderDiv.textContent = `Photo ${index}`; 
        return placeholderDiv;
    }

    // Generate and append 20 placeholders
    for (let i = 1; i <= numberOfPhotos; i++) {
        const placeholder = createPlaceholder(i);
        galleryContainer.appendChild(placeholder);
    }
});