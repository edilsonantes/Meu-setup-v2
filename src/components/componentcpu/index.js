import React, {useState,useEffect} from 'react';
import './componentcpu.css';
import {Link} from 'react-router-dom';


function ComponentCPU ({key, nome, soquete, modGrafico, cores, threads, pci, cache, boost, base, cooler, tdp, vel, mem, canais}) {
    return (
        <div className="col-md-4 col-sm-6 mb-3 mt-3">
            <h5 id="5">{nome}</h5><br/>
            Soquete: {soquete}<br/>
            Modelo Grafico: {modGrafico}<br/>
            Núcleos: {cores}<br/>
            Threads: {threads}<br/>
            PCI Express: {pci}<br/>
            Cache Total: {cache} Mb<br/>
            Boost Clock: {boost} GHz<br/>
            Base Clock: {base} GHz<br/>
            Cooler: {cooler}<br/>
            TDP: {tdp} W<br/>
            Velocidade Memória: {vel} MHz<br/>
            Memória: {mem}<br/>
            Canais de Memoria: {canais}<br/><br/><br/>
            <input type="button" value="Selecionar" className="btn btn-outline-secondary" id="" />
        </div>
    )
}

export default ComponentCPU;