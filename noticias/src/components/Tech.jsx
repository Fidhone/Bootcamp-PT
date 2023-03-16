import './Tech.css';

import React, { useEffect } from 'react';

import UseAxios from '../hooks/UseAxios';

const Tech = () => {
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
    <section className="Tech">
      {data.map((item) => {
        if (item.topic === 'Tecnología') {
          return (
            <div key={item.id} className="tech-container">
              <h1>{item.title}</h1>
              <img src={item.image} alt="foto tecnologia" className="tech-image" />
              <p>{item.summary}</p>
              <a href={item.link} className="tech-link">
                ir al artículo
              </a>
              <a href={item.clean_url} className="tech-source">
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

export default Tech;
