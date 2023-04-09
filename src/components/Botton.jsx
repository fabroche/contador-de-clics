import React from "react";
import '../styles/Botton.css'

function Botton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={
        esBotonDeClic
          ? "boton-clic"
          : "boton-reiniciar"
      }
      onClick={manejarClic}
    >
      {texto}
    </button>
  )
}

export default Botton;