import PokemonView from "./pokemonView.js";

class TeamView extends PokemonView {
  _addBtn = document.querySelector(".btn--add");
  _parentEl = document.querySelector(".team");
  _slots = document.querySelectorAll(".team-slot");
  MAX_SLOTS = 6;

  // Handler: Displaying team's pokemon data
  onMemberClick(handler) {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();
      handler(this.getTargetIndex(e));
    });
  }

  // Displaying the team after adding a new pokemon (rendering only the Pokemon added)
  displayTeam(data) {
    const i = data.team.findIndex((pok) => pok.id === data.pokemon.id);
    if (i === -1) return;

    const slot = this._slots[i];
    slot.classList.remove("team-slot--empty");
    slot.dataset.id = data.pokemon.id;
    slot.innerHTML = this.renderPokemonMarkup(data.pokemon);
  }

  // Rendering markup for a team member
  renderPokemonMarkup(data) {
    return `
      <div id=${data.id}>
        <img class="slot-sprite"
        src="${data.sprite}"
        alt="${this.capitalize(data.name)} sprite" />
          <div class="slot-meta">
            <h3 class="slot-name">${this.capitalize(data.name)}  <span class="slot-id">#${data.id}</span>
            </h3>
                <div class="slot-types">
                    ${this.createTypeMarkup(data.type)}
                </div>
          </div>
      </div>
    `;
  }

  // Preparing the empty slot
  clearSlot(slotIndex) {
    const slot = this._slots[slotIndex];
    if (!slot) return;

    slot.classList.add("team-slot--empty");
    slot.dataset.slot = slotIndex + 1;
    slot.dataset.id = "";
    slot.innerHTML = this.renderEmptyMarkup();
  }

  // Markup for an empty slot
  renderEmptyMarkup() {
    return `
          <span class="placeholder">Pokemon</span>
      `;
  }

  // Rendering the slot - either displaying a Pokemon from the team or a placeholder
  renderSlot(data, index) {
    console.log(this._slots);
    const slot = this._slots[index];
    if (!slot) return;

    if (!data) {
      this.clearSlot(index);
      return;
    }

    slot.classList.remove("team-slot--empty");
    slot.innerHTML = this.renderPokemonMarkup(data.team[index]);
  }

  // Function to synchronize the team after deleting a member
  // (only rendering the members after the deleted pokemon)
  syncTeamAfterDelete(deletedIndex, data) {
    console.log(`Usuwany: ${deletedIndex}`);
    for (let i = deletedIndex; i <= this.MAX_SLOTS; i++) {
      console.log(`Sprawdzam: ${i}`);
      if (!data.team[i]) {
        console.log("Brak danych w tym indeksie");
        this.clearSlot(i);
      } else {
        console.log("Są dane w tym indeksie");
        this.renderSlot(data, i);
      }
    }
  }
}

export default new TeamView();
