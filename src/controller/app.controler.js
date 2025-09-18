import { getPokemon } from "../services/pokeapi.service.js";
import SearchView from "../view/search.view.js";
import { mapApiToPokemon } from "../model/pokemon.model.js";
import { state } from "../model/state.js";

// Handles the user's search result
const handleSearch = async function (query) {
  const pokemon = await getPokemon(query);
  await mapApiToPokemon(pokemon);
  console.log(state);
};

// App initialisation
const init = function () {
  SearchView.onSearch(handleSearch);
};

init();
