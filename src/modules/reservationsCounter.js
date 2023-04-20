/* Reservations counter */
const reservationsCounter = (counter, link) => {
  link.innerHTML = `Reservations (${counter})`;
  return counter;
};

export default reservationsCounter;