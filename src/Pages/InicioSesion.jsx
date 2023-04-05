import "./InicioSesion.css";

import React from "react";
import { useForm } from "react-hook-form";

const InicioSesion = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Aquí puedes enviar las credenciales del usuario a tu servidor
    console.log("Email:", data.email);
    console.log("Password:", data.password);

    // Guarda los datos de usuario en localStorage
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
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
