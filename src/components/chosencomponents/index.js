import React, {useEffect, useState} from 'react';
import './chosencomponents.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function ChosenComponents(){

    function Teste(){
        console.log('TESTANDO')
    }

    var config = useSelector(state => state.config)

    return (
        <div className="col-md-4 justify-content-center col-sm-6">
            <div className="row my-2">
                <label for="nome" className="form-label">Nome do Setup:</label><br/>
                <input type="text" name="nome" className="campo mb-3" id="nome"/>
            </div>                        
            <div onClick={Teste} id="procEscolhido" className="row componenteEscolhido my-2">
                <Link className="text-decoration-none"><p>{config.cpu.nome}</p></Link>
            </div>
            <div onClick={Teste} id="procEscolhido" className="row componenteEscolhido my-2">
                <Link className="text-decoration-none"><p>{config.mb.nome}</p></Link>
            </div>
            <div onClick={Teste} id="procEscolhido" className="row componenteEscolhido my-2">
                <Link className="text-decoration-none"><p>{config.ram.nome}</p></Link>
            </div>
            <div onClick={Teste} id="procEscolhido" className="row componenteEscolhido my-2">
                <Link className="text-decoration-none"><p>{config.gpu.nome}</p></Link>
            </div>
            <div onClick={Teste} id="procEscolhido" className="row componenteEscolhido my-2">
                <Link className="text-decoration-none"><p>{config.pwr.nome}</p></Link>
            </div>
            <div className="row my-2 justify-content-center">
                <input type="button" value="Salvar" className="btn btn-warning salvar" id="salvar"/>
            </div>
            <div className="row my-2 justify-content-center">
                <input type="button" value="Cancelar" className="btn btn-outline-secondary cancelar" id="cancelar"/>
            </div>

        </div>
    )
}

export default ChosenComponents;