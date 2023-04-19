/* Reservations counter */
const ReservationsCounter = (counter, link) => {
  link.innerHTML = `Reservations (${counter})`;
  return counter;
};

export default ReservationsCounter;