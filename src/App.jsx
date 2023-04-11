import "./App.css";

import { useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

const App = () => {
  const [user, setUser] = useState(() => localStorage.getItem("currentUser"));
  const setearUser = (data) => {
    setUser(data);
  };

  return (
    <div className="App">
      <NavBar user={user} setUser={setearUser} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
