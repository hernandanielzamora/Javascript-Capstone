import reservationsCounter from './reservationsCounter.js';

/* Involvement Api */
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tngK8NfXluNWvAs7EHbF/reservations';

/* Getting reservations list from the Involvement API */
const displayReservations = async () => {
  const cardContainers = document.querySelectorAll('.card');
  cardContainers.forEach((card) => {
    const reservationsTitle = card.querySelectorAll('.reservation-title');
    const openModalBtn = card.querySelectorAll('[data-modal-target]');
    openModalBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        try {
          const res = await fetch(`${BASE_URL}?item_id=${btn.id}`);
          const data = await res.json();
          const reservationCounter = data.length;
          const div = card.querySelector('.reservations-list');
          div.innerHTML = '';
          data.forEach((reservation) => {
            const li = document.createElement('li');
            li.innerHTML = `From: ${reservation.date_start} / To: ${reservation.date_end} by ${reservation.username}`;
            div.appendChild(li);
          });
          reservationsTitle.forEach((title) => {
            if (reservationCounter > 0) {
              reservationsCounter(reservationCounter, title);
            }
          });
          return true;
        } catch (error) {
          const errorMessage = 'Error, try again later.';
          return errorMessage;
        }
      });
    });
  });
};

export default displayReservations;