import reservationsCounter from './reservationsCounter.js';

/* Involvement Api */
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tngK8NfXluNWvAs7EHbF/reservations';

/* Display new reservations list using the Involvement API */
const addReservations = async () => {
  /* Selecting the cards */
  const cardContainers = document.querySelectorAll('.card');
  cardContainers.forEach((card) => {
    /* Selecting cards components (btns - title) */
    const openModalBtn = card.querySelectorAll('.add-reservation');
    const reservationsTitle = card.querySelectorAll('.reservation-title');
    openModalBtn.forEach((btn) => {
      btn.addEventListener('click', async (event) => {
        event.preventDefault();
        const reservationForm = card.querySelectorAll('.reservation-form');
        /* Getting the values from the form */
        reservationForm.forEach(async (form) => {
          const data = {
            item_id: `${card.id}`,
            username: form.querySelector('#name').value,
            date_start: form.querySelector('#start_date').value,
            date_end: form.querySelector('#end_date').value,
          };
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            redirect: 'follow',
          };
          await fetch(BASE_URL, requestOptions);
          /* Reset the form */
          form.querySelector('#name').value = '';
          form.querySelector('#start_date').value = '';
          form.querySelector('#end_date').value = '';
          /* Reload Reservations */
          const res = await fetch(`${BASE_URL}?item_id=${card.id}`);
          const reservations = await res.json();
          const reservationCounter = reservations.length;
          const div = card.querySelector('.reservations-list');
          div.innerHTML = '';
          reservations.forEach((reservation) => {
            const li = document.createElement('li');
            li.innerHTML = `From: ${reservation.date_start} / To: ${reservation.date_end} by ${reservation.username}`;
            div.appendChild(li);
          });
          reservationsTitle.forEach((title) => {
            if (reservationCounter > 0) {
              reservationsCounter(reservationCounter, title);
            }
          });
        });
      });
    });
  });
};

export default addReservations;