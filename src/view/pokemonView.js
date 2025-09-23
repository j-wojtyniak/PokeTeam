export default class PokemonView {
  _parentEl;
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

  displayInfo(pokemon, preview = false) {
    preview ? (this._parentEl = document.querySelector(".pokemon-info")) : this._parentEl;
    const markup = this.createInfoMarkup(pokemon, preview);
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  createInfoMarkup(data, preview) {
    // TODO: remove .pokemon (state.pokemon in controller)
    return `
        <article class="poke-card">
            <header class="poke-header">
              <h2 class="poke-name">${this.capitalize(data.name)} <span class="poke-id">#${data.id}</span></h2>
              <div class="poke-types">
                ${this.createTypeMarkup(data.type)}
              </div>
            </header>

            <div class="poke-main">
              <img
                class="poke-art"
                src="${data.img}"
                alt="${data.name} artwork"
                loading="lazy"
              />

              <dl class="poke-stats">
                <div>
                  <dt>HP</dt>
                  <dd data-stat="hp">${data.stats.hp}</dd>
                </div>
                <div>
                  <dt>Attack</dt>
                  <dd data-stat="attack">${data.stats.attack}</dd>
                </div>
                <div>
                  <dt>Defense</dt>
                  <dd data-stat="defense">${data.stats.defense}</dd>
                </div>
                <div>
                  <dt>Sp. Atk</dt>
                  <dd data-stat="sp-attack">${data.stats["special-attack"]}</dd>
                </div>
                <div>
                  <dt>Sp. Def</dt>
                  <dd data-stat="sp-defense">${data.stats["special-defense"]}</dd>
                </div>
                <div>
                  <dt>Speed</dt>
                  <dd data-stat="speed">${data.stats.speed}</dd>
                </div>
              </dl>
            </div>
            <div class="poke-cry">
              <button class="btn-cry" data-cry="${data.cry}"> 🔊 Play cry
              </button>
            </div>

            <footer class="poke-actions">
              <button class="btn-action btn-evolution">Show evolution line</button>
              <button class="btn-action btn-moves">Show moves</button>
              <button class="btn-action btn-encounters">Show location encounters</button>
            </footer>
          </article>
                  <div class="buttons">
          
          ${preview ? '<button class="btn btn--delete">Delete Pokemon</button>' : '<button class="btn btn--add">Add Pokemon</button>'}
          
        </div>
          `;
  }
}
