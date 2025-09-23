import PokemonView from "./pokemonView.js";

class TeamView extends PokemonView {
  _addBtn = document.querySelector(".btn--add");
  _parentEl = document.querySelector(".team");

  handleDisplayMember(handler) {
    // TODO: rozdzielic displayMember na model i view
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      const target = e.target.closest(".team-slot");
      if (!target) return;

      const i = Number(target.dataset.slot) - 1;
      handler(i);

      // const indexToDisplay = data.team.findIndex((pok) => pok.id === Number(target.dataset.id));

      // const pokemonToDisplay = data.team.at(indexToDisplay);

      // this.displayInfo(pokemonToDisplay, true);
    });
  }

  displayTeam(data) {
    const i = data.team.findIndex((pok) => pok.id === data.pokemon.id) + 1;
    if (i === 0) return;

    const slot = document.querySelector(`[data-slot='${i}']`);
    slot.classList.remove("team-slot--empty");
    slot.dataset.id = data.pokemon.id;
    slot.innerHTML = `
        <div id=${data.pokemon.id}>
            <img class="slot-sprite"
            src="${data.pokemon.sprite}"
            alt="${this.capitalize(data.pokemon.name)} sprite" />
                <div class="slot-meta">
                    <h3 class="slot-name">${this.capitalize(data.pokemon.name)}  <span class="slot-id">#${data.pokemon.id}</span>
                    </h3>
                        <div class="slot-types">
                            ${this.createTypeMarkup(data.pokemon.type)}
                        </div>
                </div>
        </div>
    `;
  }
}

exp