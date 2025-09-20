export default class Pokemon {
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
}
