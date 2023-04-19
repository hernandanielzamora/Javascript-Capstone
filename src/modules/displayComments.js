/* App Api */
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tngK8NfXluNWvAs7EHbF/comments';

/* Getting comments list from the Involvement API */
const DisplayComments = async () => {
  const cardContainers = document.querySelectorAll('.card');
  cardContainers.forEach((card) => {
    const openModalBtn = card.querySelectorAll('[data-modal-target]');
    openModalBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const res = await fetch(`${BASE_URL}?item_id=item${btn.id}`);
        const data = await res.json();
        const div = card.querySelector('.comments-list');
        div.innerHTML = '';
        data.forEach((comment) => {
          const li = document.createElement('li');
          li.innerHTML = `${comment.comment} - ${comment.creation_date} by ${comment.username}`;
          div.appendChild(li);
        });
      });
    });
  });
};

export default DisplayComments;