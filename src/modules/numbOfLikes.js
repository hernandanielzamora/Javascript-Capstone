/* App Api */
const urlApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tngK8NfXluNWvAs7EHbF/likes';

/* Getting likes from the App API */
const getLikes = async () => {
  const cards = document.querySelectorAll('.card');
  const likeCount = document.querySelectorAll('.like-count');
  await fetch(urlApi)
    .then((response) => response.json())
    .then((json) => {
      const cardsArray = Array.from(cards);
      cardsArray.forEach((card, index) => {
        json.forEach((item) => {
          if (item.item_id === card.id) {
            likeCount[index].innerHTML = item.likes;
          }
        });
      });
    });
};

/* Interacting with the like from the App Api */
const interactionLike = async () => {
  const likeBtns = document.querySelectorAll('.like-btn');
  const likeBtnIcon = document.querySelectorAll('.fa-heart');
  const likeBtnCount = document.querySelectorAll('.like-count');
  const cards = document.querySelectorAll('.card');
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      likeBtnIcon[index].classList.remove('fa-regular');
      likeBtnIcon[index].classList.add('fa-solid');
      likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML) + 1;
      fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify({
          item_id: cards[index].id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    });
  });
};

export { getLikes, interactionLike };