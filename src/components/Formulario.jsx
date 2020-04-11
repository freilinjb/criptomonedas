import React from 'react';
import styled from '@emotion/styled';

const Boton = styled.input`
    margin-top:20px;
    font-weight: bold;
    font-size:20px;
    padding:10px;
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
    return ( 
        <form>
            <Boton typed="submit" value="Calcular"/>
        </form>
     );
}
 
export default Formulario;