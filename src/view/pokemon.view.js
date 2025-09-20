class PokemonView {
  _dataEl = document.querySelector(".pokemon-info");

  displayInfo(pokemon) {
    const markup = this.createInfoMarkup(pokemon);
    this._dataEl.innerHTML = "";
    this._dataEl.insertAdjacentHTML("afterbegin", markup);
  }

  capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  createTypeMarkup(types) {
    const typesMarkup = types.map((type) => {
      return `
        <span class="type-badge type-${type}">${this.capitalize(type)}</span>`;
    });
    return typesMarkup.join("");
  }

  createInfoMarkup(data) {
    // TODO: remove .pokemon (state.pokemon in controller)
    return `
        <article class="poke-card">
            <header class="poke-header">
              <h2 class="poke-name">${this.capitalize(data.pokemon.name)} <span class="poke-id">#${data.pokemon.id}</span></h2>
              <div class="poke-types">
                ${this.createTypeMarkup(data.pokemon.type)}
              </div>
            </header>

            <div class="poke-main">
              <img
                class="poke-art"
                src="${data.pokemon.img}"
                alt="${data.pokemon.name} artwork"
                loading="lazy"
              />

              <dl class="poke-stats">
                <div>
                  <dt>HP</dt>
                  <dd data-stat="hp">${data.pokemon.stats.hp}</dd>
                </div>
                <div>
                  <dt>Attack</dt>
                  <dd data-stat="attack">${data.pokemon.stats.attack}</dd>
                </div>
                <div>
                  <dt>Defense</dt>
                  <dd data-stat="defense">${data.pokemon.stats.defense}</dd>
                </div>
                <div>
                  <dt>Sp. Atk</dt>
                  <dd data-stat="sp-attack">${data.pokemon.stats["special-attack"]}</dd>
                </div>
                <div>
                  <dt>Sp. Def</dt>
                  <dd data-stat="sp-defense">${data.pokemon.stats["special-defense"]}</dd>
                </div>
                <div>
                  <dt>Speed</dt>
                  <dd data-stat="speed">${data.pokemon.stats.speed}</dd>
                </div>
              </dl>
            </div>
          </article>`;
  }
}

export default new PokemonView();
