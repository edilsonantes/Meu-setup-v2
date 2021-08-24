import React from 'react';
import './componentpwr.css';
import { set_PWR } from '../../actions';
import {useDispatch} from 'react-redux';


function ComponentPWR ({key, nome, potencia}) {
    
    const dispatch = useDispatch();
    
    return (
        <div className="col-md-4 col-sm-6 mb-3 mt-3">
            <h5 id="5">{nome}</h5><br/>
            Potência: {potencia} W<br/><br/><br/>
            <input type="button" value="Selecionar" className="btn btn-outline-secondary" onClick={() => set_PWR(nome, potencia, dispatch)}/>
        </div>
    )
}

export default ComponentPWR;