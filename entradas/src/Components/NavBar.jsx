import "./NavBar.css";

import React from "react";
import { NavLink } from "react-router-dom";

import Logout from "./Logout";

const NavBar = ({ user, setUser }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="linkNav">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/busqueda_eventos" className="linkNav">
            Buscar eventos
          </NavLink>
        </li>
        <li>
          <NavLink to="/compra_entradas" className="linkNav">
            Comprar entradas
          </NavLink>
        </li>
        <li>
          <NavLink to="/gestion_cuentas" className="linkNav">
            Gestionar cuenta
          </NavLink>
        </li>
      </ul>
      <Logout user={user} setUser={setUser} />
    </nav>
  );
};

export default NavBar;
