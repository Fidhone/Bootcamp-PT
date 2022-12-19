import "../Login/Login.css";

const container = document.querySelector("#local");
const loginInput = document.querySelector("#username");
const loginBtn = document.querySelector("#login");
const logout = document.querySelector("#logout");

export const CreateLogin = () => {
  const setUser = (username) => {
    localStorage.setItem("user", username);
    container.innerHTML = `<h2>Welcome ${username}!</h2>`;
  };

  loginBtn.addEventListener("click", () => setUser(loginInput.value));

  logout.addEventListener("click", () => {
    localStorage.clear();
    container.innerHTML = `<h2>No hay usuario</h2>`;
  });

  if (localStorage.getItem("user")) {
    container.innerHTML = `<h2>Welcome ${localStorage.user}!</h2>`;
  } else {
    container.innerHTML = `<h2>No hay usuario</h2>`;
  }
};
