export async function getPokemon(query) {
  try {
    const q = String(query).trim().toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${q}/`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Pokemon ${q} not found!`);
    return await res.json();
  } catch (err) {
    console.log(`${err.message}`);
  }
}
