import "./NavBar.css";

import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/busqueda_eventos" className="active">
            Buscar eventos
          </NavLink>
        </li>
        <li>
          <NavLink to="/comparador_precios" className="active">
            Comparar precios
          </NavLink>
        </li>
        <li>
          <NavLink to="/compra_entradas" className="active">
            Comprar entradas
          </NavLink>
        </li>
        <li>
          <NavLink to="/gestion_cuentas" className="active">
            Gestionar cuenta
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
