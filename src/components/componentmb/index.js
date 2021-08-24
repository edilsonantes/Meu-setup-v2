import React, {useState,useEffect} from 'react';
import './componentmb.css';
import {Link} from 'react-router-dom';


function ComponentMB ({key, nome, soquete, vel, pci}) {
    return (
        <div className="col-md-4 col-sm-6 mb-3 mt-3">
            <h5 id="5">{nome}</h5><br/>
            Soquete: {soquete}<br/>
            PCI Express: {pci}<br/>
            Velocidade Memória: {vel} MHz<br/><br/><br/>
            <input type="button" value="Selecionar" className="btn btn-outline-secondary" id="" />
        </div>
    )
}

export default ComponentMB;