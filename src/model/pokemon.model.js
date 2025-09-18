import { state } from "./state.js";

export async function mapApiToPokemon(data) {
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
