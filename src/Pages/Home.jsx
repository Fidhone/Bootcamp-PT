import "./Home.css";

import { useEffect, useState } from "react";

import { getTicketmaster } from "../services/ticketMaster";

const Home = () => {
  const [ticketMaster, setTicketMaster] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(20);

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const handleEventsPerPageChange = (eventsPerPage) => {
  //   setEventsPerPage(eventsPerPage);
  //   setCurrentPage(1);
  // };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = ticketMaster.slice(indexOfFirstEvent, indexOfLastEvent);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(ticketMaster.length / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <h1>Entradas.FTM</h1>
      <div className="events-container">
        {currentEvents.map((event) => (
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
      <div className="pagination">
        {/* <span className="events-per-page">
          Eventos por página:
          <select
            value={eventsPerPage}
            onChange={(e) => handleEventsPerPageChange(parseInt(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </span> */}
        <ul className="page-numbers">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber} className={pageNumber === currentPage ? "active" : ""}>
              <button className="btnPage" onClick={() => handlePageChange(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
