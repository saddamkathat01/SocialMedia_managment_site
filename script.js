function connectUser() {
    if (/Mobi/.test(navigator.userAgent)) {
      window.location.href = "tel:+1234567890"; // Mobile users - call
    } else {
      window.location.href = "https://wa.me/1234567890"; // Web users - WhatsApp chat
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.createElement('div');
    const modalImg = document.createElement('img');
    const closeModal = document.createElement('span');

    // Create modal structure
    modal.classList.add('modal');
    modalImg.classList.add('modal-img');
    closeModal.classList.add('close');
    closeModal.innerHTML = '&times;'; // Close icon

    // Append elements to modal
    modal.appendChild(modalImg);
    modal.appendChild(closeModal);
    document.body.appendChild(modal);

    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = item.querySelector('img').src; // Set the modal image source
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal on click
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable background scrolling
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable background scrolling
        }
    });
});
