import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Protected from "./Components/Protected";
import ThemeProvider from "./context/ThemeContext";
import BusquedaEventos from "./Pages/BusquedaEventos";
import CompraEntradas from "./Pages/CompraEntradas";
import GestionCuentas from "./Pages/GestionCuentas";
import Home from "./Pages/Home";
import InicioSesion from "./Pages/InicioSesion";
import Page404 from "./Pages/Page404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/inicio_sesion" element={<InicioSesion />} />
            <Route
              path="/busqueda_eventos"
              element={
                <Protected>
                  <BusquedaEventos />
                </Protected>
              }
            />
            <Route
              path="/compra_entradas"
              element={
                <Protected>
                  <CompraEntradas />
                </Protected>
              }
            />
            <Route
              path="/gestion_cuentas"
              element={
                <Protected>
                  <GestionCuentas />
                </Protected>
              }
            />
          </Route>
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
