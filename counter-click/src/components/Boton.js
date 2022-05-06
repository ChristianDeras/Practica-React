import React from "react";
import '../StyleSheets/StyleButton.css'
function Boton({texto, isButtonClic,manageClic}) {
   

  return (
    <button
      className={ isButtonClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick={manageClic}>
      {texto}
    </button>
  );
}

export default Boton;