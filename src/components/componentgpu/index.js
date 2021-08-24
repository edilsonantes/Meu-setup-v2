import React, {useState,useEffect} from 'react';
import './componentgpu.css';
import {Link} from 'react-router-dom';


function ComponentGPU ({key, nome, fonte, qtdmem, mem}) {
    return (
        <div className="col-md-4 col-sm-6 mb-3 mt-3">
            <h5 id="5">{nome}</h5><br/>
            Potência recomendada: {fonte} W<br/>
            Memória de vídeo: {qtdmem} Gb<br/>
            Tipo de memória: {mem} <br/><br/><br/>
            <input type="button" value="Selecionar" className="btn btn-outline-secondary" id="" />
        </div>
    )
}

export default ComponentGPU;