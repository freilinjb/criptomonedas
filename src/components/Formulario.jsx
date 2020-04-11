import React,{ useEffect, useState } from 'react';
import styled from '@emotion/styled';

import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Axios from 'axios';

const Boton = styled.input`
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

const Formulario = () => {

    //state de listado de criptomonedas
    const [listaCripto, setListaCripto] = useState([]);

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    //utilizar useMoneda
    const [state, SelectMonedas] = useMoneda("Elige tu Moneda",'', MONEDAS);
   
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
   
   return ( 
        <form>
            <SelectMonedas/>
            <SelectCripto/>
            <Boton typed="submit" value="Calcular"/>
        </form>
     );
}
 
export default Formulario;