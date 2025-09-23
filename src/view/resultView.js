import PokemonView from "./pokemonView.js";

class ResultView extends PokemonView {
  _parentEl = document.querySelector(".pokemon-info");

  onAdd(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const addBtn = e.target.closest(".btn--add");
      if (!addBtn) return;
      handler();
    });
  }

  onDelete(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const deleteBtn = e.target.closest(".btn--delete");
      if (!deleteBtn) return;

      handler();
      this._parentEl.innerHTML = "";
    });
  }
}

export default new ResultView();
