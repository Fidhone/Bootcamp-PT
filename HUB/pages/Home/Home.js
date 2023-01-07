import "./Home.css"
import { Title } from "../../Components/title";
import { initContent } from "../../main";

const template = () => `
${Title(`Welcome ${localStorage.user}!`, 1)}
<section class="Home">
<button id="Pokedex">Pokedex</button>
<button id="Wacka">Wacka-Hole</button>
<button id="Raya">3-en-raya</button>
<button id="Memory">Memory-game</button>
<button id="Hangman">Hangman-game</button>
<button id="Quiz">Quiz-neo</button>
</section>
`;

const addListeners = () => {
  document
    .querySelector("#Pokedex")
    .addEventListener("click", () => initContent("Pokedex"));
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};
