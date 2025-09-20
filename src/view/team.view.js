class TeamView {
  _addBtn = document.querySelector(".btn--add");
  _teamEl = document.querySelector(".team");

  addToTeam(handler) {
    this._addBtn.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  createEmptySlot(i) {
    return `
    <article class="team-slot team-slot--empty" data-slot="${i + 1}">
        <span class="placeholder">Pokemon</span>
    </article>`;
  }

  createPokemonSlot(pokemon, i) {
    return `
    <article class="team-slot" data-slot="${i + 1}" aria-label="Team member">
        <img class="slot-sprite"
        src="${pokemon.sprite}"
        alt="${pokemon.name} sprite" />

        <div class="slot-meta">
            <h3 class="slot-name">${pokemon.name}<span class="slot-id">#${pokemon.id}</span></h3>
                <div class="slot-types">
                    <span class="type-badge type-${pokemon.type}">${pokemon.type}</span>
                 </div>
        </div>
    </article>
    `;
  }

  displayTeam(team) {
    const markup = team.map((pokemon, i) => {
      return pokemon ? this.createPokemonSlot(pokemon, i) : this.createEmptySlot(i);
    });
    console.log(markup.join(""));
    this._teamEl.insertAdjacentHTML("afterbegin", markup.join(""));
  }
}

export default new TeamView();

{
  /* <article class="team-slot" data-slot="1" aria-label="Team member">
  <img class="slot-sprite"
       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
       alt="Pikachu sprite" />

  <div class="slot-meta">
    <h3 class="slot-name">Pikachu <span class="slot-id">#025</span></h3>
    <div class="slot-types">
      <span class="type-badge type-electric">Electric</span>
      <!-- <span class="type-badge type-flying">Flying</span> -->
    </div>
  </div>
</article> */
}
