const fetchPokemons = async () => {
  const cardsContainer = document.getElementById('cards-container');
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await res.json();
  const newArray = data.results;
  newArray.forEach(async (i) => {
    const res = await fetch(i.url);
    const data = await res.json();
    const card = document.createElement('div');
    card.classList = 'card';
    card.id = `${data.id}`;
    card.innerHTML = `<div class="card-content">
                          <img src="${data.sprites.front_default}" alt="${data.name}" class="card-img">
                          <div class="card-header">
                            <h2>${data.name.toUpperCase()}</h2>
                          </div>
                          <div class="like-container">
                            <button class='like-btn' id="like-btn"><i class='fa-regular fa-heart'></i></button></li>
                            <span class='like-count'>100</span>
                          </div>
                          <div class="button-container">
                            <button class="comment-btn" id="comment-btn">Comments</button>
                            <button class="reservation-btn" id="reservation-btn">Reservation</button>                     
                          </div>
                        </div>
      `;
    cardsContainer.appendChild(card);
  });
};

export default fetchPokemons;