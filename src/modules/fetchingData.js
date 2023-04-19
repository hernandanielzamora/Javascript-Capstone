import { getLikes, interactionLike } from './numbOfLikes.js';
import pokemonCount from './listCounter.js';
import popGenrato from './commentsPopup.js';
import ReservationModal from './reservationsModal.js';
import DisplayReservations from './displayReservations.js';
import DisplayComments from './displayComments.js';
import postComments from './commentsForm.js';

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
                           <button  data-modal-target="#popup${data.id}" class="comment-btn" id="${data.id}">Comments</button>
                           <button data-modal-target="#modal${data.id}" class="reservation-btn" id='${data.id}'>Reservations</button>
                         </div>
                         <dialog id='popup${data.id}' class=''>
                          <button data-close-button id='closeDialoge' class='absolute btn-noBg' type='button' title='closing button'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' fill='black' class='bi bi-x' viewBox='0 0 16 16'>
                              <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/>
                            </svg>
                          </button>
                          <img src="${data.sprites.front_default}" alt="${data.name}" class="card-img">
                          <div class="reservation-header">
                            <h2>${data.name.toUpperCase()}</h2>
                          </div>
                          <div class="reservations-details">
                            <div class="specs">
                              <div class=>
                                <p>Weight: ${data.weight}</p>
                                <p>Height: ${data.height}</p>
                              </div>
                              <div>
                                <p>Base experience: ${data.base_experience}</p>
                                <p>Order: ${data.order}</p>
                              </div>
                            </div>
                            <h2 class="reservation-title">Comments</h2>
                            <div class="comments-list" id="comments-list">
                            </div>
                          </div>
                          <form class="comments-form" action="">
                            <h2 class="reservation-title">Add a comment</h2>
                            <label for="name"></label>
                            <input type="text" id="name" placeholder="Your name">
                            <label for="insights"></label>
                            <textarea name="insights" id="insights" cols="50" rows="5" placeholder="Your insights"></textarea>
                            <button type="button" id="item${data.id}" class="comments-btn">Comment</button>
                          </form>
                        </dialog>
                         <dialog id='modal${data.id}' class='reservation-modal'>
                          <button data-close-button id='closeDialoge' class='absolute btn-noBg' type='button' title='closing button'>
                           <i class="fa-solid fa-xmark fa-2xl"></i>
                          </button>
                          <img src="${data.sprites.front_default}" alt="${data.name}" class="modal-card-img">
                          <div class="reservation-header">
                            <h2>${data.name.toUpperCase()}</h2>
                          </div>
                          <div class="reservations-details">
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
                            <h2 class="reservation-title">Reservations</h2>
                            <div class="reservations-list" id="reservations-list">
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
    DisplayComments();
    postComments();
    pokemonCount(newArray.length, pokeCount);
    DisplayReservations();
  } catch (error) {
    const errorMessage = 'Error, try again later.';
    const errorElement = document.createElement('div');
    errorElement.innerText = errorMessage;
    document.body.appendChild(errorElement);
  }
};

export default fetchPokemons;