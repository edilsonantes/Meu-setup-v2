import React from 'react';
import './minhaconfig.css';
import { set_CPU } from '../../actions';
import {useDispatch} from 'react-redux';


function MinhaConfig ({key, nome, cpu, gpu, mb, pwr, ram}) {
    
    
    return (
        <div className="col-md-5 col-sm-6 mb-3 mt-3 border">
            <h5 id="5">{nome}</h5><br/>
            Processador: {cpu}<br/>
            Placa-mãe: {mb}<br/>
            Memória RAM: {ram}<br/>
            Placa de Vídeo: {gpu}<br/>
            Fonte: {pwr}<br/><br/><br/>
            <div className="row mb-2">
                <div className="col-md-6">
                    <input type="button" value="Editar" className="btn btn-warning"/>
                </div>
                <div className="col-md-6">
                    <input type="button" value="Deletar" className="btn btn-danger"/>
                </div>
            </div>
        </div>
    )
}

export default MinhaConfig;