import logo from './logo.svg';
import './App.css';
import DerasLogo from '../src/logo.svg';
import Boton from './components/Boton'
function App() {
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
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
