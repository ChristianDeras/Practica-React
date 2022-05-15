import logo from './logo.svg';
import './App.css';
import './StyleSheets/Boton.css'
import DerasLogo from '../src/logo.svg';
import Boton from './components/Boton'
import Pantalla from './components/Pantalla';
import Clear from './components/Clear';
import { useState } from 'react'
import React from 'react';
function App() {

  const [input, setInput] = useState('');

  const addInput = val =>{
    setInput(input + val);
  };

  return (
    <div className="App">
      <div className='DerasLogo-cont'>
        <img
          src={DerasLogo}
          className='deras-logo'
          alt='Logo Deras'
        />
      </div>
      <div className='cont-calc'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manageClic={addInput}>1</Boton>
          <Boton manageClic={addInput}>2</Boton>
          <Boton manageClic={addInput}>3</Boton>
          <Boton manageClic={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manageClic={addInput}>4</Boton>
          <Boton manageClic={addInput}>5</Boton>
          <Boton manageClic={addInput}>6</Boton>
          <Boton manageClic={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manageClic={addInput}>7</Boton>
          <Boton manageClic={addInput}>8</Boton>
          <Boton manageClic={addInput}>9</Boton>
          <Boton manageClic={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manageClic={addInput}>=</Boton>
          <Boton manageClic={addInput}>0</Boton>
          <Boton manageClic={addInput}>.</Boton>
          <Boton manageClic={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <Clear manageClear={()=>setInput('')}>
              Clear
          </Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
