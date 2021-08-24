import React, {useState,useEffect} from 'react';
import './componentram.css';
import {Link} from 'react-router-dom';


function ComponentRAM ({key, nome, vel, tamanho}) {
    return (
        <div className="col-md-4 col-sm-6 mb-3 mt-3">
            <h5 id="5">{nome}</h5><br/>
            Velocidade Memória: {vel} MHz<br/>
            Capacidade: {tamanho} Gb<br/><br/><br/>
            <input type="button" value="Selecionar" className="btn btn-outline-secondary" id="" />
        </div>
    )
}

export default ComponentRAM;