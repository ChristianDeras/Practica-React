import react from "react";
const  isOperator = valor=>{
  return isNaN(valor) && (valor != '.')&& (valor != '=');
}
function Boton(props){
  return(
    <div
      className={`boton-cont ${isOperator(props.children)? 'operator':null}`}      >
        {props.children}
    </div>
  );
}

export default Boton;