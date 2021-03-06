import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';
import Axios from 'axios';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top:5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight:700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    height: 6px;
    background-color: #66A2FE;
    display:block; 
  }
`;


function App() {

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
 
  useEffect(() => {
    //evitamos que se ejecuta la primera vez
    if(moneda === '') return;

    const cotizarCriptomoneda = async () => {
       //COnsultar la api para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await Axios.get(url);
      
      //Mostro spinner
      setCargando(true);
      //oculta el spinner 
      setTimeout(() => {
        
        setCargando(false);
              //acceder a los valores de manera dinamica a los valores
      // console.log(resultado.data.DISPLAY[criptomoneda][moneda]);

        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 2000);


    }

    cotizarCriptomoneda();
    //se ejecuta cuando esos valores cambien
  },[moneda, criptomoneda]);

  //Mostrar Spinner o resultado
  const Componente = (cargando) ? <Spinner/> : <Cotizacion resultado={resultado}/>
  return (
    <Contenedor>
      <div> 
        <Imagen src={imagen} alt="Imagen Crypto"/>
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Formulario setMoneda={setMoneda} setCriptomoneda={setCriptomoneda}/>
        
        { Componente } 
      </div>
    </Contenedor> 
  );
}

export default App;
