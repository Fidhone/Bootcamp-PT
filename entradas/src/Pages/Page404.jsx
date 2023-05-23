import "./Page404.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="container404">
      <header className="top-header"></header>

      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>
      <section className="error">
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title">Pagina no encontrada</h1>
            <p className="message__text">
              Lo sentimos, la página que estaba buscando no se encuentra aquí. El enlace
              que siguió puede estar roto o ya no existe. Por favor, inténtelo de nuevo, o
              eche un vistazo de nuevo.
            </p>
          </div>
          <div className="error__nav e-nav">
            <NavLink to="/" className="e-nav__link"></NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page404;
