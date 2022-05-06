import React from "react";

function Testimonio (props) {
  return(
    <div className="contenedor-test">
      <img
        className="imagen-test"
        src={require(`../imagenes/${props.imagen}.png`)}
        alt="Foto de un testimonio"
      />

      <div className="contenedor-text-test">
        <p className="nombre-test"> <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-test"> {props.cargos} en {props.empresa}</p>
        <p className="texto-test"> {props.Testimonio}</p>
      </div>
    </div>
  );


}

export default Testimonio;