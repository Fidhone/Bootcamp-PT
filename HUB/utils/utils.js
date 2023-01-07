import { initContent } from "../main";


const getNumber = () => `${Math.floor(Math.random() * 251)}`;

const generateRandomRgb = () => `
rgb(${getNumber()},${getNumber()},${getNumber()})
`;

const changeBackground = () => {
  document.body.style.background = generateRandomRgb();
};

const backButton = () => {
  if (initContent() ==! "Home") {
    initContent("Home")
  }
}

const logout = () => {
  localStorage.removeItem("user");
  initContent()
};

export const addHeaderListeners = () => {
  document.querySelector("#btnBackground").addEventListener("click", () => changeBackground());
  document.querySelector("#backBtn").addEventListener("click", () => backButton());
  document.querySelector("#logoutBtn").addEventListener("click", () => logout());

  changeBackground()
};
