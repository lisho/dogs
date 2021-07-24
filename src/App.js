import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Selector from './components/Selector';
import getPerro from './helpers/getPerro';

const perroInicial = {
  
  image: "",
  breed: {
    id: "",
    name: "",
    descripcion: "",
  }
  
}

function App() {

  const [perro, setPerro] = useState(perroInicial);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    actualizaPerro(0);
  }, [])

  const actualizaPerro = (razaId) => {
    setLoading(true)
    getPerro(razaId)
      .then(
        (nuevoPerro) => { setPerro(nuevoPerro); 
                          setLoading(false)}      
      );
   
  }
  return (
    <div className="App">
      <div className="cardContainer">
        <h1 className="titulo">Buscador de perros</h1>
        <Selector 
          actualizaPerro = {actualizaPerro}
        />

       <Card 
              perro={perro}
              actualizaPerro={actualizaPerro}
              loading={loading}
            />
        
      </div>
    </div>
  );
}

export default App;
