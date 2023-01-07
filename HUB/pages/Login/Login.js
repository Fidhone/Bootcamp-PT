import "../Login/Login.css";
import { initContent } from "../../main";

const setUser = () => {
  if (document.querySelector("#username")) {
    window.localStorage.setItem(
      "user",
      document.querySelector("#username").value
    );
    initContent("Home");
  }
};

const template = () => `
    <h1>Welcome To Hub Games</h1>
    <input type="text" id="username" placeholder="Insert name" autocomplete="off"/>
    <button id="loginBtn">Login</button>
`;

const addListeners = () => {
  if (document.querySelector("#loginBtn"))
    document.querySelector("#loginBtn").addEventListener("click", setUser);
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};
