import SearchView from "../view/searchView.js";
import ResultView from "../view/resultView.js";
import TeamView from "../view/teamView.js";
import { getPokemon } from "../services/pokeapi.service.js";
import { displayFetchedPokemon, addPokemonToTeam, setCurrentPokemon, deletePokemon } from "../model/pokemon.model.js";
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
const handleAddToTeam = function () {
  console.log(state.team);
  addPokemonToTeam();

  // Display the team
  TeamView.displayTeam(state);
};

const handleDisplayMember = function (i) {
  setCurrentPokemon(i);
  ResultView.displayInfo(state.pokemon, true);
};

const handleDeleteFromTeam = function () {
  const idx = deletePokemon();
  TeamView.syncTeamAfterDelete(idx, state);
};

// Initialise the app
const init = function () {
  // TODO: change the names so that they make sense
  SearchView.onSearch(handleSearch);
  TeamView.onMemberClick(handleDisplayMember);
  ResultView.onAdd(handleAddToTeam);
  ResultView.onDelete(handleDeleteFromTeam);
};

init();
