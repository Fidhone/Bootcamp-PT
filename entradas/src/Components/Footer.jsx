import "./Footer.css";

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear(); // Obtenemos el año actual

  return (
    <footer>
      <div>Creado por: Francisco Torres</div>
      <div>© {year} Mi sitio web. Todos los derechos reservados.</div>
      <div>
        Sígueme en:
        <a
          href="https://www.facebook.com/francisco.torresmoreno.7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        ,
        <a href="https://twitter.com/TuNombre" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>{" "}
        y
        <a
          href="https://www.instagram.com/TuNombre"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
