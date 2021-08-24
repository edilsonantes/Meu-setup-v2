import React from 'react';
import './componentram.css';
import { set_RAM } from '../../actions';
import {useDispatch} from 'react-redux';


function ComponentRAM ({key, nome, vel, tamanho}) {
    
    const dispatch = useDispatch();
    
    return (
        <div className="col-md-4 col-sm-6 mb-3 mt-3">
            <h5 id="5">{nome}</h5><br/>
            Velocidade Memória: {vel} MHz<br/>
            Capacidade: {tamanho} Gb<br/><br/><br/>
            <input type="button" value="Selecionar" className="btn btn-outline-secondary" onClick={() => set_RAM(nome, vel, dispatch)}/>
        </div>
    )
}

export default ComponentRAM;