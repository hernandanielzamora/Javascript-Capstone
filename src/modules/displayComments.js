import commentsCounter from './commentsCounter.js';

/* App Api */
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tngK8NfXluNWvAs7EHbF/comments';

/* Getting comments list from the Involvement API */
const DisplayComments = async () => {
  const cardContainers = document.querySelectorAll('.card');
  cardContainers.forEach((card) => {
    const commentsTitle = card.querySelector('.comment-title');
    const openModalBtn = card.querySelectorAll('[data-modal-target]');
    openModalBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        try {
          const res = await fetch(`${BASE_URL}?item_id=item${btn.id}`);
          const data = await res.json();
          const commentCounter = data.length;
          const div = card.querySelector('.comments-list');
          div.innerHTML = '';
          data.forEach((comment) => {
            const li = document.createElement('li');
            li.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
            div.appendChild(li);
          });
          if (commentCounter > 0) {
            commentsCounter(commentCounter, commentsTitle);
          } else {
            commentsTitle.innerHTML = 'Comments (0)';
          }
        } catch (error) {
          const errorMessage = 'Error, try again later.';
          const errorElement = document.createElement('div');
          errorElement.innerText = errorMessage;
          document.body.appendChild(errorElement);
        }
      });
    });
  });
};

export default DisplayComments;