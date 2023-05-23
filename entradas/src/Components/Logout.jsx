import "./Logout.css";

import { useEffect, useState } from "react";

const Logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const emailCurrent = localStorage.getItem("currentUser");
  const dataCurrent = localStorage.getItem(emailCurrent);

  const handleLogout = () => {
    const dataJSON = JSON.parse(dataCurrent);
    const person = {
      email: dataJSON.email,
      token: false,
      fav: dataJSON.fav,
    };
    localStorage.removeItem(emailCurrent);
    localStorage.setItem(emailCurrent, JSON.stringify(person));
    localStorage.removeItem("email");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    window.location.reload(); // recarga la página después de cerrar sesión
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {console.log(dataCurrent)}
      {isLoggedIn && (
        <button className="btnLogout" onClick={handleLogout}>
          Cerrar sesión
        </button>
      )}
    </>
  );
};

export default Logout;
