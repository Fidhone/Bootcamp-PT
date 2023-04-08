import React, { useState } from "react";
import { useForm } from "react-hook-form";

const GestionCuentas = () => {
  const [password, setPassword] = useState(localStorage.getItem("password") || "");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setPassword(data.password);

    localStorage.setItem("password", data.password);
  };

  return (
    <form className="form user-account-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="form-label" htmlFor="password">
          Contraseña:
        </label>
        <input
          className="form-input"
          type="password"
          id="password"
          defaultValue={password}
          {...register("password", { required: true })}
        />
      </div>
      <button className="form-button" type="submit">
        Guardar cambios
      </button>
    </form>
  );
};

export default GestionCuentas;
