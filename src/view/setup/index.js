import React, {useEffect, useState} from 'react';
import './setup.css';
import NavbarTop from '../../components/navbarTop';
import NavbarMenu from '../../components/navbarMenu';
import Footer from '../../components/footer';
import ComponentCPU from '../../components/componentcpu';
import ComponentMB from '../../components/componentmb';
import ComponentRAM from '../../components/componentram';
import ComponentGPU from '../../components/componentgpu';
import ComponentPWR from '../../components/componentpwr';
import ChosenComponents from '../../components/chosencomponents';
import {useSelector} from 'react-redux';
import firebase from '../../config/firebase';


function Setup() {
    const [pesquisa, setPesquisa] = useState('');
    const [components, setComponents] = useState([]);
    var listaComponents = [];
    var tipo = useSelector(state => state.config.tipoComponent);
    var cpuSoq = useSelector(state => state.config.cpu.soq);
    var mbVel = useSelector(state => state.config.mb.vel);
    var gpuPWR = useSelector(state => state.config.gpu.pwr);
    var renderMB = components.filter(components => components.soquete === cpuSoq);
    var renderRAM = components.filter(components => components.velocidadeMemoria >= mbVel);
    var renderPWR = components.filter(components => components.potencia >= gpuPWR);

    useEffect( () => {
        firebase.firestore().collection('/componentes').where('tipo', '==', tipo).get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                if (doc.data().nome.indexOf(pesquisa) >= 0){
                    listaComponents.push({
                        id: doc.id,
                        ...doc.data()
                    })
                }
            })

            setComponents(listaComponents);
        })
    });

    function mudarCard(tipo){
        switch(tipo){
            case 'cpu':
                return components.map(item => <ComponentCPU key={item.id} nome={item.nome} soquete={item.soquete} modGrafico={item.modeloGrafico} cores={item.cores} threads={item.threads} pci={item.pciExpress} cache={item.cacheTotal} boost={item.boostClock} base={item.baseClock} cooler={item.cooler} tdp={item.TDP} vel={item.velocidadeMemoria} mem={item.memoria} canais={item.canaisMemoria}/>)
            case 'mb':
                return renderMB.map(item => <ComponentMB key={item.id} nome={item.nome} soquete={item.soquete} pci={item.pciExpress} vel={item.velocidadeMemoria}/>)
            case 'ram':
                return renderRAM.map(item => <ComponentRAM key={item.id} nome={item.nome} vel={item.velocidadeMemoria} tamanho={item.tamanho}/>)
            case 'gpu':
                return components.map(item => <ComponentGPU key={item.id} nome={item.nome} fonte={item.fonte} qtdmem={item.qtdMemoria} mem={item.tipoMemoria}/>)
            case 'pwr':
                return renderPWR.map(item => <ComponentPWR key={item.id} nome={item.nome} potencia={item.potencia}/>)
            
        }
    }
    
    
    
    return(
        <div>
            
            <NavbarTop />
            <NavbarMenu />

            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div id="conteudo" className="col-md-12 text-center">
                        
                        
                        <div className="row justify-content-center">
                            <div id="renderComponentes" className="col-md-8 col-sm-6">
                                <div className="row p-2 mt-4">
                                    <input onChange={(e) => setPesquisa(e.target.value)}type="text" className="form-control campo text-center" placeholder="Pesquisar componentes"/>
                                </div>
                                <div className="row">                            
                                    {
                                        mudarCard(tipo)
                                    }   
                                </div>
                            </div>
                            <ChosenComponents />
                        </div>

                    </div>
                </div>
                
            </div>
            
            <Footer />
            
        </div>
    )
}

export default Setup;