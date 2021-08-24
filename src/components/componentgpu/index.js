import React from 'react';
import './componentgpu.css';
import { set_GPU } from '../../actions';
import {useDispatch} from 'react-redux';


function ComponentGPU ({key, nome, fonte, qtdmem, mem}) {
    
    const dispatch = useDispatch();
    
    return (
        <div className="col-md-4 col-sm-6 mb-3 mt-3">
            <h5 id="5">{nome}</h5><br/>
            Potência recomendada: {fonte} W<br/>
            Memória de vídeo: {qtdmem} Gb<br/>
            Tipo de memória: {mem} <br/><br/><br/>
            <input type="button" value="Selecionar" className="btn btn-outline-secondary" onClick={() => set_GPU(nome, fonte, dispatch)}/>
        </div>
    )
}

export default ComponentGPU;