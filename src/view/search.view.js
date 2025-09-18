class SearchView {
  _inputEl = document.querySelector("#search-input");

  // Returns the search input
  getQuery() {
    return this._inputEl.value.trim().toLowerCase();
  }

  // Adds a query returning handler to the search input
  onSearch(handler) {
    this._inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        handler(this.getQuery());
        this.clearInput();
      }
    });
  }

  clearInput() {
    this._inputEl.value = "";
  }
}

export default new SearchView();
