import React from 'react';

const Cotizacion = ({resultado}) => {
    //Si el objeto llega vacio no ejecuta nada
    if(Object.keys(resultado).length === 0) return null;

    console.log(`resultado: ${resultado.PRICE}`);
    

    return ( 
        <div>
            <p>El presio es: <span>{resultado.PRICE}</span></p>
        </div>
     );
}

export default Cotizacion;