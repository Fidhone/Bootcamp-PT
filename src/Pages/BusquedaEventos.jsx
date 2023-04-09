import React, { useEffect, useState } from "react";

import { getTicketmasterEvent } from "../services/ticketMaster";

function BusquedaEventos() {
  const [filtro, setFiltro] = useState("todos");
  const [eventos, setEventos] = useState([]);
  const [eventosFiltrados, setEventosFiltrados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getTicketmasterEvent();
      setEventos(response._embedded.events);
      setEventosFiltrados(response._embedded.events);
      console.log(response);
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
    console.log(eventos);
    console.log(filtro);
  }, [eventos, filtro]);

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  return (
    <div>
      <label htmlFor="filtro">Filtrar por:</label>
      <select id="filtro" value={filtro} onChange={handleFiltroChange}>
        <option value="todos">Todos los eventos</option>
        <option value="Music">Conciertos</option>
        <option value="Sports">Deportes</option>
        <option value="Film">Teatro</option>
      </select>
      <ul>
        {eventosFiltrados.map((evento) => (
          <li key={evento.id}>{evento.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BusquedaEventos;
