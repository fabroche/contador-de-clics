import './App.css'
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Botton from './components/Botton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState();

  const manejarClic = () => {

    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">

      <div className='freecodecamp-logo-container' onLoad={reiniciarContador}>

        <img className='freecodecamp-logo'

          src={freeCodeCampLogo}

          alt="logo de freecodecamp" />

      </div>

      <div className='contenedor-principal'>

        <Contador numClics={numClics} />

        <Botton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Botton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  )
}

export default App
