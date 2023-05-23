import "./InicioSesion.css";

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const InicioSesion = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const person = { email: data.email, token: true, fav: [] };
    // Aquí puedes enviar las credenciales del usuario a tu servidor
    console.log("Email:", data.email);
    console.log("Password:", data.password);

    // Guarda los datos de usuario en localStorage
    localStorage.setItem("currentUser", data.email);
    localStorage.setItem(`${data.email}`, JSON.stringify(person));
    localStorage.setItem("email", data.email);
    navigate("/compra_entradas");
    window.location.reload(); // recarga la página después de cerrar sesión
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email:
        </label>
        <input
          className="form-input"
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="password">
          Contraseña:
        </label>
        <input
          className="form-input"
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
      </div>
      <button className="form-button" type="submit">
        Iniciar sesión
      </button>
    </form>
  );
};

export default InicioSesion;
