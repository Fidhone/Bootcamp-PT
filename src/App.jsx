import "./App.css";

import { Outlet } from "react-router-dom";

import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
