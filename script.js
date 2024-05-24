//your code here
const images = document.querySelectorAll('.image');

    let draggedItem = null;

    images.forEach((image) => {
      image.addEventListener('dragstart', () => {
        draggedItem = image;
        setTimeout(() => {
          image.style.display = 'none';
        }, 0);
      });

      image.addEventListener('dragend', () => {
        setTimeout(() => {
          draggedItem.style.display = 'block';
          draggedItem = null;
        }, 0);
      });

      image.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      image.addEventListener('dragenter', (e) => {
        e.preventDefault();
        if (draggedItem !== null && draggedItem !== image) {
          // Swap the background images
          const tempBackground = draggedItem.style.backgroundImage;
          draggedItem.style.backgroundImage = image.style.backgroundImage;
          image.style.backgroundImage = tempBackground;
        }
      });
    });