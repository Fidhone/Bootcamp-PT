export const createColorMode = () => {

  addEventListenerColorMode();
};

const body = document.querySelector("body");

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rbgColor = `rgb(${r},${g},${b})`;
  return rbgColor;
};

const setBackground = () => {
  const newColor = generateRandomColor();
  body.style.backgroundColor = newColor;
};

const addEventListenerColorMode = () => {
  document.querySelector("#btn-colorMode").addEventListener("click", setBackground);
};
