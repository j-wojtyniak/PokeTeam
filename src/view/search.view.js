const inputEl = document.querySelector("#search-input");

// Returns the search input
export function getQuery() {
  return inputEl.value.trim().toLowerCase();
}

// Adds a query returning handler to the search input
export function onSearch(handler) {
  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handler(getQuery());
      clearInput();
    }
  });
}

const clearInput = function () {
  inputEl.value = "";
};
