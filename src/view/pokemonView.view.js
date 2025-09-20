import Pokemon from "./pokemon.view.js";

class PokemonView extends Pokemon {
  _parentEl = document.querySelector(".pokemon-info");
}

export default new PokemonView();
