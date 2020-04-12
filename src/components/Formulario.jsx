import React,{ useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda'; //custom hooks
import Axios from 'axios';

const Boton = styled.button`
    margin-top:20px;
    font-weight: bold;
    font-size:20px;
    padding:1rem;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    text-align: center;
    font-family: 'Bebas Neue', cursive;

    &:hover {
        background-color: #326AC0;
        
        cursor:pointer;
    }
`;

const Formulario = ({setMoneda ,setCriptomoneda}) => {

    //state de listado de criptomonedas
    const [listaCripto, setListaCripto] = useState([]);
    const [error, setError] = useState(false);

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    //utilizar useMoneda
    const [moneda, SelectMonedas] = useMoneda("Elige tu Moneda",'', MONEDAS);
   
   //utilizar useCriptomoneda

   const [criptomoneda, SelectCripto] = useCriptomoneda("Elige tu Criptomoneda",'',listaCripto);
   
   useEffect(() => {
    const consultarAPI = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
 
        const resultado = await Axios.get(url);

        setListaCripto(resultado.data.Data);
    } 
    consultarAPI();
   },[]);

   //cuando el usuario hace submit
   const cotizarMoneda = e =>{
       e.preventDefault();

       if(moneda.trim() === '' || criptomoneda.trim() === '') {
           setError(true);
           console.log(`moneda: ${moneda} cripto: ${criptomoneda}`);
           
           return;
       }
           console.log(`moneda: ${moneda} cripto: ${criptomoneda}`);

       //pasar los datos al componente principal
       setError(false);
       setMoneda(moneda);
       setCriptomoneda(criptomoneda);
   }
   
   return ( 
        <form onSubmit={cotizarMoneda}>

            { error ? <Error mensaje="Todos los campos son obligatorios"/> : null}

            <SelectMonedas/>
            <SelectCripto/>
            <Boton typed="submit" value="Calcular">Calcular</Boton>
        </form>
     );
}
 
export default Formulario;