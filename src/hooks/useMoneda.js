import React,{Fragment, useState} from 'react';

const useMoneda = () => {

    //State de nuestro custom hook
    const [state,setState] = useState('');


    const Seleccionar = () => (
    //lo que este aqui es lo que se va a mostrar en pantalla
        <Fragment>
            <div className="form-group">
                <label htmlFor="">Moneda</label>
                <select className="form-control" name="moneda">
                    <option value="MXN">Peso Mexicano</option>
                </select>
            </div>
        </Fragment>
    );

    //Retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, setState];
}

export default useMoneda;