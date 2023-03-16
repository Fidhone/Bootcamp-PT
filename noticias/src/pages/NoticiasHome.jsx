import './NoticiasHome.css';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UseAxios from '../hooks/UseAxios';

const NoticiasHome = () => {
  const { data, error, fetchData } = UseAxios(
    'https://640edda24ed25579dc3ec43e.mockapi.io/api/v1/articles',
  );
  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleClick = (topic) => {
    navigate(`/noticias/${topic}`);
  };

  if (error) {
    return <div>Error al cargar la noticia</div>;
  }

  if (!data) {
    return <div className="Loading">Cargando...</div>;
  }

  return (
    <section className="Noticiashome">
      {data.map((item) => (
        <button
          onClick={() => handleClick(item.topic)}
          key={item.id}
          className={`noticia-${item.id}`}
        >
          {item.topic}
        </button>
      ))}
    </section>
  );
};

export default NoticiasHome;
