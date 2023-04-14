import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Logout from "./Logout";

const NavContainer = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavItem = styled.li`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s ease-in-out;

  &.active {
    border-bottom: 2px solid #fff;
  }
`;

const NavBar = ({ user, setUser }) => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/" exact activeClassName="active">
            Inicio
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/busqueda_eventos" activeClassName="active">
            Buscar eventos
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/compra_entradas" activeClassName="active">
            Comprar entradas
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/gestion_cuentas" activeClassName="active">
            Gestionar cuenta
          </NavLinkStyled>
        </NavItem>
      </NavList>
      <Logout user={user} setUser={setUser} />
    </NavContainer>
  );
};

export default NavBar;
