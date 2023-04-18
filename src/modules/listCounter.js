/* NavBar counter */
const pokemonCount = (counter, link) => {
  link.innerHTML = `Pokemons (${counter})`;
  return counter;
};

export default pokemonCount;