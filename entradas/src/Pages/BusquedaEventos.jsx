import "./BusquedaEventos.css";

import React, { useEffect, useState } from "react";

import { getTicketmaster } from "../services/ticketMaster";

function BusquedaEventos() {
  const [filtro, setFiltro] = useState("todos");
  const [eventos, setEventos] = useState([]);
  const [eventosFiltrados, setEventosFiltrados] = useState([]);
  const [favoritos, setFavoritos] = useState(() => {
    const currentUser = localStorage.getItem("currentUser");
    const dataCurrent = localStorage.getItem(currentUser);
    const data = JSON.parse(dataCurrent);
    return data.fav;
  });
  useEffect(() => {
    async function fetchData() {
      const response = await getTicketmaster();
      setEventos(response._embedded.events);
      setEventosFiltrados(response._embedded.events);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filtrados = eventos.filter((eventos) =>
      filtro === "todos"
        ? true
        : eventos.classifications[0].segment.name.trim().toLowerCase() ===
          filtro.trim().toLowerCase(),
    );
    setEventosFiltrados(filtrados);
  }, [eventos, filtro]);

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleLike = (e) => {
    const eventId = e.target.id;
    const emailCurrent = localStorage.getItem("currentUser");
    const dataCurrent = localStorage.getItem(emailCurrent);
    const dataJSON = JSON.parse(dataCurrent);
    const favArray = dataJSON.fav;
    const eventIndex = favArray.indexOf(eventId);

    if (eventIndex >= 0) {
      // Si el evento ya existe en el array, se elimina
      favArray.splice(eventIndex, 1);
    } else {
      // Si el evento no existe en el array, se agrega
      favArray.push(eventId);
    }

    const person = {
      email: dataJSON.email,
      token: true,
      fav: favArray,
    };
    localStorage.removeItem(emailCurrent);
    localStorage.setItem(emailCurrent, JSON.stringify(person));

    console.log("fav array", favArray);
    setFavoritos(favArray);
    console.log(favoritos);
  };

  return (
    <div className="container">
      <label htmlFor="filtro" className="label">
        Filtrar por:
      </label>
      <select id="filtro" value={filtro} onChange={handleFiltroChange} className="select">
        <option value="todos">Todos los eventos</option>
        <option value="Music">Conciertos</option>
        <option value="Sports">Deportes</option>
        <option value="Film">Festivales</option>
      </select>
      <ul className="ul">
        {localStorage.getItem("currentUser")
          ? eventosFiltrados.map((evento) => (
              <div key={evento.id}>
                <li key={evento.id} className="li">
                  {evento.name}
                  <button
                    className={
                      favoritos.includes(evento.id) ? "button-favorito" : "button"
                    }
                    onClick={(e) => handleLike(e)}
                    id={evento.id}
                  >
                    ♥
                  </button>
                </li>
              </div>
            ))
          : eventosFiltrados.map((evento) => <li key={evento.id}>{evento.name}</li>)}
      </ul>
    </div>
  );
}

export default BusquedaEventos;
