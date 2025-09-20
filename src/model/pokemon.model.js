import { state } from "./state.js";

export function mapApiToPokemon(data) {
  state.pokemon.id = data.id;
  state.pokemon.name = data.name;
  state.pokemon.type = data.types.map((type) => {
    return type.type.name;
  });
  state.pokemon.sprite = data.sprites.front_default;
  state.pokemon.img = data.sprites.other["official-artwork"].front_default;
  data.stats.forEach((statistics) => {
    state.pokemon.stats[statistics.stat.name] = statistics.base_stat;
  });
}

export function addPokemonToTeam() {
  // TODO: Create functions to display alerts of having a full team or the pokemon already being in the team
  if (state.team.length == 6) {
    console.log("Maximum team is 6!");
    return;
  }
  if (state.team.some((member) => member.id === state.pokemon.id)) {
    console.log(`${state.pokemon.name} is already in your team!`);
    return;
  }

  state.team.push({
    id: state.pokemon.id,
    name: state.pokemon.name,
    sprite: state.pokemon.sprite,
    type: state.pokemon.type,
  });
}
