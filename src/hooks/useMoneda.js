import React,{Fragment, useState} from 'react';

const useMoneda = (label,stateInicial,opciones) => {

    //State de nuestro custom hook
    const [state,setState] = useState(stateInicial);


    const Seleccionar = () => (
    //lo que este aqui es lo que se va a mostrar en pantalla
        <Fragment>
            <div className="form-group">
                <label htmlFor="">{label}</label>
                <select className="form-control" name="moneda">
                    <option value="" disabled selected>--Seleccione --</option>
                    {opciones.map(opcion => (
                        <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                    ))}
                </select>
            </div>
        </Fragment>
    );

    //Retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, setState];
}

export default useMoneda;