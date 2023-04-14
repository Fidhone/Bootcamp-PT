import "./CompraEntradas.css";

import React, { useEffect, useState } from "react";

import { getTicketmaster } from "../services/ticketMaster";

function CompraEntradas() {
  const [eventos, setEventos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await getTicketmaster();
      setEventos(response._embedded.events);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const eventosFiltrados = eventos.filter((event) => {
    const nombreEvento = event.name.toLowerCase();
    const busquedaLower = busqueda.toLowerCase();
    return nombreEvento.includes(busquedaLower);
  });

  return (
    <div className="compra-entradas">
      <input
        type="text"
        value={busqueda}
        onChange={handleChange}
        placeholder="Buscar eventos..."
        className="input-busqueda"
      />
      {eventosFiltrados.map((event) => (
        <div key={event.id} className="event">
          <img className="img-event" src={event.images[3].url} alt={event.name} />
          <div className="event-details">
            <h2>{event.name}</h2>
            <p>
              {event.dates.start.localDate} a las {event.dates.start.localTime}
            </p>
            <p>Lugar: {event._embedded.venues[0].name}</p>
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="comprar-entradas"
            >
              Comprar entradas
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompraEntradas;
