import "./pokedex.css";
import { Title } from "../../Components/title";

const template = () => `
  <section class="pokeApi">
  ${Title("Pokedex", 1)}
  <div id="searching">
  <input type="text" id="pokemon" placeholder="Insert type" autocomplete="off"/>
  <button id="searchBtn">Search</button>
  </div>
  <div class="pokeContainer"></div>
  </section>
`;

const getPokemons = async () => {
  let pokemonList = [];
  for (let i = 1; i < 152; i++) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemon = await data.json();
    pokemonList.push(pokemon);
  }
  mapPokemons(pokemonList);
  // console.log(pokemonList);
};

const mapPokemons = (list) => {
  const typeToBackground = {
    fire: "../images/backgrounds/background-fuego.png",
    steel: "../images/backgrounds/background-acero.png",
    water: "../images/backgrounds/background-agua.png",
    bug: "../images/backgrounds/background-bicho.png",
    dragon: "../images/backgrounds/background-dragon.png",
    electric: "../images/backgrounds/background-electrico.png",
    ghost: "../images/backgrounds/background-fantasma.png",
    ice: "../images/backgrounds/background-hielo.png",
    fighting: "../images/backgrounds/background-lucha.png",
    normal: "../images/backgrounds/background-normal.png",
    grass: "../images/backgrounds/background-planta.png",
    psychic: "../images/backgrounds/background-psiquico.png",
    fairy: "../images/backgrounds/background-siniestro.png",
    ground: "../images/backgrounds/background-tierra.png",
    poison: "../images/backgrounds/background-veneno.png",
    rock: "../images/backgrounds/background-roca.png",
  };

  const mappedPokemons = list.map((item) => ({
    id: item.id,
    name: item.name.toUpperCase(),
    image: item.sprites.other["official-artwork"].front_default,
    type: item.types["0"].type.name,
    background: typeToBackground[item.types["0"].type.name],
  }));

  printPokemon(mappedPokemons);

  // console.log(mappedPokemons);
};

const printPokemon = (list) => {
  const container = document.querySelector(".pokeContainer");
  for (const item of list) {
    const templateImg = `
    <div style="background-image: url('${item.background}');"> 
    <img src=${item.image} alt=${item.name}/>
    <h5>${item.name}</h5>
    <a>#${item.id}</a>
    </div>
    `;
    container.innerHTML += templateImg;
  }
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  getPokemons();
};
