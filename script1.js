document.querySelectorAll('.gallery-container img').forEach(image => {
    image.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        const expandedImage = document.createElement('div');
        expandedImage.className = 'expanded-image';
        expandedImage.innerHTML = `
            <img src="${image.src}" alt="${image.alt}">
            <button class="close-btn">Close</button>
        `;
        document.body.appendChild(expandedImage);
        document.querySelector('.close-btn').addEventListener('click', () => {
            document.body.style.overflow = 'auto';
            document.body.removeChild(expandedImage);
        });
    });
});
