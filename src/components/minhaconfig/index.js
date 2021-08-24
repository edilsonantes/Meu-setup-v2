import React from 'react';
import './minhaconfig.css';
import { deletar } from '../../actions';


function MinhaConfig ({key, nome, cpu, gpu, mb, pwr, ram, id}) {
    
    
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
                    <input type="button" value="Editar" className="btn btn-outline-warning"/>
                </div>
                <div className="col-md-6">
                    <input type="button" value="Deletar" className="btn btn-outline-danger" onClick={() => deletar(key, id)}/>
                </div>
            </div>
        </div>
    )
}

export default MinhaConfig;