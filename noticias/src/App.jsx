import './app.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Games from './components/Games';
import Protected from './components/Protected';
import Sports from './components/Sports';
import Tech from './components/Tech';
import { UserContextProvider } from './context/UseContext';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import NoticiasHome from './pages/NoticiasHome';
import ContactData from './pages/services/contactData';

function App() {
  return (
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route
            path="/Home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/noticias"
            element={
              <Protected>
                <NoticiasHome />
              </Protected>
            }
          />
          <Route
            path="/noticias/Deportes"
            element={
              <Protected>
                <Sports />
              </Protected>
            }
          />
          <Route
            path="/noticias/Tecnología"
            element={
              <Protected>
                <Tech />
              </Protected>
            }
          />
          <Route
            path="/noticias/Juegos"
            element={
              <Protected>
                <Games />
              </Protected>
            }
          />
          <Route
            path="/Deportes"
            element={
              <Protected>
                <Sports />
              </Protected>
            }
          />
          <Route
            path="/Tecnología"
            element={
              <Protected>
                <Tech />
              </Protected>
            }
          />
          <Route
            path="/Juegos"
            element={
              <Protected>
                <Games />
              </Protected>
            }
          />
          <Route
            path="/Contactos"
            element={
              <Protected>
                <ContactData />
              </Protected>
            }
          />
          <Route
            path="*"
            element={
              <Protected>
                <NotFound />
              </Protected>
            }
          />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
