import React, {useState,useEffect} from 'react';
import './componentcard.css';
import {Link} from 'react-router-dom';


function ComponentCard () {
    return (
        <div className="col-md-4 col-sm-6 mb-3 mt-3">
            <h5 id="5">Intel Core i9 9900KS</h5><br/>
            Soquete: LGA1151<br/>
            Modelo Grafico: Off Board<br/>
            Núcleos: 8<br/>
            Threads: 16<br/>
            PCI Express": 4.0 x16<br/>
            Cache Total: 20<br/>
            Boost Clock: 5.0<br/>
            Base Clock: 4.0<br/>
            Cooler: NC<br/>
            TDP: 127<br/>
            Velocidade Memória: 2666<br/>
            Memória: DDR4<br/>
            Canais de Memoria: 2<br/><br/><br/>
            <input type="button" value="Selecionar" className="btn btn-outline-secondary" id="" />
        </div>
    )
}

export default ComponentCard;