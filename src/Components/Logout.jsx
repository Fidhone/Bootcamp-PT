import { useEffect, useState } from "react";

const Logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
    window.location.reload(); // recarga la página después de cerrar sesión
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setIsLoggedIn(true);
    }
  }, []);

  return <>{isLoggedIn && <button onClick={handleLogout}>Cerrar sesión</button>}</>;
};

export default Logout;
