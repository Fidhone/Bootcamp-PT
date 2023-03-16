import './Navbar.css';

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../context/UseContext';

const Navbar = () => {
  const { logout } = useContext(UserContext);
  return (
    <div>
      <nav className="navbar">
        <ul style={{ listStyle: 'none' }}>
          <li>
            <NavLink to="/noticias">Noticias</NavLink>
          </li>
          <li>
            <NavLink to="/deportes">Deportes</NavLink>
          </li>
          <li>
            <NavLink to="/tecnología">Tecnologia</NavLink>
          </li>
          <li>
            <NavLink to="/juegos">Juegos</NavLink>
          </li>
          <li>
            <NavLink to="/Contactos">Contacto</NavLink>
          </li>
          <button onClick={logout}>LOGOUT</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
