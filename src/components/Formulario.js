import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = ({ crearCita }) => {
  //Crer state de citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //Crear state error
  const [error, setError] = useState(false);

  //Funcion quen se ejecuta cada vez que el user escribe
  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer valores
  const { mascota, dueño, fecha, hora, sintomas } = cita;

  //Cuando el user presiona agregar cita
  const submitCita = (e) => {
    e.preventDefault();

    //Validar
    if (
      mascota.trim() === "" ||
      dueño.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);

      return;
    }

    //Asignar ID
    cita.id = uuid();

    //Crear Cita
    crearCita(cita);

    //Reiniciar el form

    actualizarCita({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2>Crear turno</h2>

     

      <form onSubmit={submitCita}>
        <label>Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre del dueño/a</label>
        <input
          type="text"
          name="dueño"
          className="u-full-width"
          placeholder="Nombre del dueño/a"
          onChange={handleChange}
          value={dueño}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

 {error ? <p className="alerta-error">Todos los campos son obligatorios</p>
           
       : null}
        <button type="submit" className="button-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
