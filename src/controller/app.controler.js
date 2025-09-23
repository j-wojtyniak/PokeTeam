import SearchView from "../view/searchView.js";
import ResultView from "../view/resultView.js";
import TeamView from "../view/teamView.js";
import { getPokemon } from "../services/pokeapi.service.js";
import { displayFetchedPokemon, addPokemonToTeam, setCurrentPokemon } from "../model/pokemon.model.js";
import { state } from "../model/state.js";

// Handle the user's search result
const handleSearch = async function (query) {
  const pokemon = await getPokemon(query);

  // Map api result to Pokemon data
  displayFetchedPokemon(pokemon);

  // Display searched Pokemon info
  ResultView.displayInfo(state.pokemon);
};

// Handles adding to the team
const handleTeam = function () {
  addPokemonToTeam();
  ResultView.displayInfo(state.pokemon, true);

  // Display the team
  TeamView.displayTeam(state);
};

const handleDisplayMember = function (i) {
  setCurrentPokemon(i);
  ResultView.displayInfo(state.pokemon, true);
};

const handleDelete = function () {
  console.log("");
};

// Initialise the app
const init = function () {
  // TODO: change the names so that they make sense
  SearchView.onSearch(handleSearch);
  TeamView.handleDisplayMember(handleDisplayMember);
  ResultView.handleAddBtn(handleTeam);
  ResultView.handleDeleteBtn(handleDelete);
};

init();
