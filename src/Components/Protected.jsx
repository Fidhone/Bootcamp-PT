import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  if (!localStorage.getItem("email")) {
    return <Navigate to="/Inicio_sesion" />;
  }

  return children;
};

export default Protected;
