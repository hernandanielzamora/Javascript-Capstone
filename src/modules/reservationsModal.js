/* Detailed Reservation Modal */

const ReservationModal = () => {
  // Open reservation modal
  const openModalBtn = document.querySelectorAll('[data-modal-target]');
  openModalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dialogContainer = document.querySelector(btn.dataset.modalTarget);
      document.body.classList.add('no-scroll');
      dialogContainer.classList.add('dialog-container');
      if (!dialogContainer.open) {
        dialogContainer.showModal();
      }
    });
  });
  // Close reservation modal
  document.addEventListener('DOMContentLoaded', () => {
    const closeButtons = document.querySelectorAll('[data-close-button]');
    closeButtons.forEach((closeButton) => {
      closeButton.addEventListener('click', () => {
        const dialogContainer = document.querySelector('.dialog-container');
        if (dialogContainer) {
          const dialog = dialogContainer.querySelector('dialog');
          dialog.close();
          dialogContainer.classList.remove('dialog-container');
          document.body.classList.remove('no-scroll');
        }
      });
    });
  });
};

export default ReservationModal;
