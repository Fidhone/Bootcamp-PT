import './Games.css';

import React, { useEffect } from 'react';

import UseAxios from '../hooks/UseAxios';

const Games = () => {
  const { data, error, fetchData } = UseAxios(
    'https://640edda24ed25579dc3ec43e.mockapi.io/api/v1/articles',
  );
  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error al cargar la noticia</div>;
  }

  if (!data) {
    return <div className="Loading">Cargando...</div>;
  }

  return (
    <section className="Games">
      {data.map((item) => {
        if (item.topic === 'Juegos') {
          return (
            <div key={item.id} className="game-container">
              <h1>{item.title}</h1>
              <img src={item.image} alt="foto juegos" className="game-image" />
              <p>{item.summary}</p>
              <a href={item.link} className="game-link">
                ir al artículo
              </a>
              <a href={item.clean_url} className="game-source">
                Fuente
              </a>
            </div>
          );
        }
        return null;
      })}
    </section>
  );
};

export default Games;
