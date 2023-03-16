import './Home.css';

import React from 'react';

import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <nav className="Home">
        <Navbar />
      </nav>
      <div className="backgroundHome">
        <footer>Creado por Francisco Torres Moreno - Copyrigth©2023</footer>
      </div>
    </>
  );
};

export default Home;
