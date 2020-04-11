import React,{Fragment} from 'react';

const useMoneda = () => {


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
    )
}

export default useMoneda;