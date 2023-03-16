import './NotFound.css';

import React from 'react';

const NotFound = () => {
  return (
    <section className="Notfound">
      <figure>
        <img
          src="https://www.uxpin.com/images/404-full.svg"
          width="785"
          height="370"
          alt="fondo not found"
        />
      </figure>
      <header>
        <h1>404</h1>
        <h2>¡Hola capitán! ¡Parece que te diriges a un planeta equivocado!</h2>
        <a href="/Home" className="btn-solid">
          Llévame de vuelta a la pagina de inicio
        </a>
      </header>
    </section>
  );
};

export default NotFound;
