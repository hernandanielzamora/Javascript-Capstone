import { getLikes, interactionLike } from './numbOfLikes.js';
import pokemonCount from './listCounter.js';
import popGenrato from './commentsPopup.js';
import ReservationModal from './reservationsModal.js';

const pokeCount = document.getElementById('poke-count');
const cardsContainer = document.getElementById('cards-container');

/* Fetching and Displaying Pokemon Cards */
const fetchPokemons = async () => {
  /* Fetching primary API */
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();
    const newArray = data.results;
    /* Creating Cards */
    const promises = newArray.map(async (i) => {
      const res = await fetch(i.url);
      const data = await res.json();
      const card = document.createElement('div');
      card.classList = 'card';
      card.id = `${data.id}`;
      card.innerHTML = ` <img src="${data.sprites.front_default}" alt="${data.name}" class="card-img">
                         <div class="card-header">
                           <h2>${data.name.toUpperCase()}</h2>
                         </div>
                         <div class="like-container">
                           <button class="like-btn" id="like-btn${data.id}"><i class="fa-regular fa-heart"></i></button></li>
                           <span class="like-count">0</span>
                         </div>
                         <div class="button-container">
                           <button  data-modal-target="#popup${data.id}" class="comment-btn" id="comment-btn">Comments</button>
                           <button data-modal-target="#modal${data.id}" class="reservation-btn" id="reservation-btn">Reservation</button>
                         </div>
                         <dialog id='modal${data.id}' class='reservation-modal'>
                          <button data-close-button id='closeDialoge' class='absolute btn-noBg' type='button' title='closing button'>
                           <i class="fa-solid fa-xmark fa-2xl"></i>
                          </button>
                          <img src="${data.sprites.front_default}" alt="${data.name}" class="modal-card-img">
                          <div class="card-header">
                            <h2>${data.name.toUpperCase()}</h2>
                          </div>
                          <div class="specs">
                            <div class="specs-top" >
                              <p>Weight: ${data.weight}</p>
                              <p>Height: ${data.height}</p>
                            </div>
                            <div class="specs-bottom">
                              <p>Base experience: ${data.base_experience}</p>
                              <p>Order: ${data.order}</p>
                            </div>
                          </div>
                        </dialog>
         `;
      cardsContainer.appendChild(card);
    });
    /* Waiting for the promises to fullfill */
    await Promise.all(promises);
    /* Executing Functions */
    getLikes();
    interactionLike();
    popGenrato();
    ReservationModal();
    pokemonCount(newArray.length, pokeCount);
  } catch (error) {
    const errorMessage = 'Error, try again later.';
    const errorElement = document.createElement('div');
    errorElement.innerText = errorMessage;
    document.body.appendChild(errorElement);
  }
};

export default fetchPokemons;