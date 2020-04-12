import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;

`;

const Info = styled.p`
    font-size: 18px;
    color:white;

    span{
        font-size:bold;
        color:white;
    }
`;

const Precio = styled.span`
    color: #FFF;
    font-size:30px;
    span {
        font-weight: bold;
    }
`;

const Cotizacion = ({resultado}) => {
    //Si el objeto llega vacio no ejecuta nada
    if(Object.keys(resultado).length === 0) return null;

    console.log(`resultado: ${resultado.PRICE}`);
    

    return ( 
        <ResultadoDiv>
            <Precio>El presio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Presio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas : <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
     );
}

export default Cotizacion;