import './App.css';
import DerasLogo from '../src/logo.svg'
import Boton from './components/Boton'
import Counter from './components/Counter';
import { useState } from 'react' 
import React from 'react';
function App() {

  const [numClics, setNumClics] = useState(0);
  
  const manageClic = ()=>{
    setNumClics(numClics+1);
  }

  const ResetCount = ()=>{
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='free-logo-conte'>
        <img
          className='freecode-logo'
          src={DerasLogo}
          alt='Logo de Free'
        />
      </div>
      <div className='Contador'>
        <Counter
          numClics={numClics}
        />

        <Boton
          texto='Clic'
          isButtonClic ={true}
          manageClic={manageClic}
        />

        <Boton
          texto='Reiniciar'
          isButtonClic ={false}
          manageClic={ResetCount}
        />
      </div>
    </div>
  );
}

export default App;
