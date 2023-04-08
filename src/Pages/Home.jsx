import "./Home.css";

import { useEffect, useState } from "react";

import { getTicketmaster } from "../services/ticketMaster";

const Home = () => {
  const [ticketMaster, setTicketMaster] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTicketmaster();
      console.log(response);

      if (response && response._embedded) {
        setTicketMaster(response._embedded.events);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Entradas.FTM</h1>
      <div className="events-container">
        {ticketMaster.map((event) => (
          <div key={event.id} className="event">
            <img className="imgEvent" src={event.images[3].url} alt={event.name} />
            <div className="event-details">
              <h2>{event.name}</h2>
              <p>
                {event.dates.start.localDate} a las {event.dates.start.localTime}
              </p>
              <p>Lugar: {event._embedded.venues[0].name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
