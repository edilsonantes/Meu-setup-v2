import React, {useState,useEffect} from 'react';
import './componentpwr.css';
import {Link} from 'react-router-dom';


function ComponentPWR ({key, nome, potencia}) {
    return (
        <div className="col-md-4 col-sm-6 mb-3 mt-3">
            <h5 id="5">{nome}</h5><br/>
            Potência: {potencia} W<br/><br/><br/>
            <input type="button" value="Selecionar" className="btn btn-outline-secondary" id="" />
        </div>
    )
}

export default ComponentPWR;