import ReservationsCounter from './reservationsCounter.js';

/* Involvement Api */
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tngK8NfXluNWvAs7EHbF/reservations';

/* Display new reservations list using the Involvement API */
const AddReservations = async () => {
  const cardContainers = document.querySelectorAll('.card');
  cardContainers.forEach((card) => {
    const openModalBtn = card.querySelectorAll('.add-reservation');
    const reservationsTitle = card.querySelectorAll('.reservation-title');
    openModalBtn.forEach((btn) => {
      btn.addEventListener('click', async (event) => {
        event.preventDefault();
        const reservationForm = card.querySelectorAll('.reservation-form');
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
          form.querySelector('#name').value = '';
          form.querySelector('#start_date').value = '';
          form.querySelector('#end_date').value = '';
          /* Reload Reservations */
          const res = await fetch(`${BASE_URL}?item_id=${card.id}`);
          const reservations = await res.json();
          const reservationsCounter = reservations.length;
          const div = card.querySelector('.reservations-list');
          div.innerHTML = '';
          reservations.forEach((reservation) => {
            const li = document.createElement('li');
            li.innerHTML = `${reservation.date_start} - ${reservation.date_end} by ${reservation.username}`;
            div.appendChild(li);
          });
          reservationsTitle.forEach((title) => {
            if (reservationsCounter > 0) {
              ReservationsCounter(reservationsCounter, title);
            }
          });
        });
      });
    });
  });
};

export default AddReservations;