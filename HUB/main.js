import { printTemplate as printLoginTemplate } from "./pages/Login/Login";
import { printTemplate as printHomeTemplate } from "./pages/Home/Home";
import { printTemplate as printPokedexTemplate } from "./pages/pokedex/Pokedex";

import { addHeaderListeners } from "./utils/utils";


export const initContent = (navigation) => {
  switch (navigation) {
    case undefined:
      window.localStorage.getItem("user")
        ? printHomeTemplate()
        : printLoginTemplate();

      break;
    case "Home":
      printHomeTemplate();
      break;
    case "Pokedex":
      printPokedexTemplate();
      break;
  }
};

addHeaderListeners();
initContent(undefined);
