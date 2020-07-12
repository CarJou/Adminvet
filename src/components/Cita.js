import React from "react";
import PropTypes from "prop-types";



const Cita = ({ cita, eliminarCita }) => (
  
  <div className="cita">
    <p>
      Mascota: <span>{cita.mascota}</span>
    </p>
    <p>
      Dueña/o: <span>{cita.dueño}</span>
    </p>
    <p>
      Hora: <span>{cita.hora}</span>
    </p>
    <p>
      Fecha: <span>{cita.fecha}</span>
    </p>
    <p>
      Sintomas: <span>{cita.sintomas}</span>
    </p>

    <button
      className="button eliminar"
      onClick={() => eliminarCita(cita.id)}
    >
      {" "}
    &times;
    </button>
    </div>
 
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};
export default Cita;
