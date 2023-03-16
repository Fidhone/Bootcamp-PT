import './Sports.css';

import React, { useEffect } from 'react';

import UseAxios from '../hooks/UseAxios';

const Sports = () => {
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
    <section className="Sports">
      {data.map((item) => {
        if (item.topic === 'Deportes') {
          return (
            <div key={item.id} className="sport-container">
              <h1>{item.title}</h1>
              <img src={item.image} alt="foto deportes" className="sport-image" />
              <p>{item.summary}</p>
              <a href={item.link} className="sport-link">
                ir al artículo
              </a>
              <a href={item.clean_url} className="sport-source">
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

export default Sports;
