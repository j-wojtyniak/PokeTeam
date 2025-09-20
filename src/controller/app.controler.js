import SearchView from "../view/search.view.js";
import PokemonView from "../view/pokemonView.view.js";
import TeamView from "../view/team.view.js";
import { getPokemon } from "../services/pokeapi.service.js";
import { mapApiToPokemon, addPokemonToTeam } from "../model/pokemon.model.js";
import { state } from "../model/state.js";

// Handle the user's search result
const handleSearch = async function (query) {
  const pokemon = await getPokemon(query);

  // Map api result to Pokemon data
  mapApiToPokemon(pokemon);

  // Display searched Pokemon info
  PokemonView.displayInfo(state.pokemon);
};

// Handles adding to the team
const handleTeam = function () {
  addPokemonToTeam();

  // Display the team
  TeamView.displayTeam(state);
};

// Initialise the app
const init = function () {
  SearchView.onSearch(handleSearch);
  TeamView.addToTeam(handleTeam);
  TeamView.handleDisplayMember(state);
  PokemonView.handleAddBtn();
};

init();
