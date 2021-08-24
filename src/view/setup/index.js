import React, {useEffect, useState} from 'react';
import './setup.css';
import NavbarTop from '../../components/navbarTop';
import NavbarMenu from '../../components/navbarMenu';
import Footer from '../../components/footer';
import ComponentCPU from '../../components/componentcpu';
import ChosenComponents from '../../components/chosencomponents';
import {useSelector} from 'react-redux';
import firebase from '../../config/firebase';


function Setup() {
    
    const [components, setComponents] = useState([]);
    var listaComponents = [];
    var tipo = useSelector(state => state.config.tipoComponent);

    useEffect( () => {
        firebase.firestore().collection('/componentes').where('tipo', '==', tipo).get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                listaComponents.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            setComponents(listaComponents);
        })
    });

    function mudarCard(tipo){
        switch(tipo){
            case 'cpu':
                return components.map(item => <ComponentCPU key={item.id} nome={item.nome} soquete={item.soquete} modGrafico={item.modeloGrafico} cores={item.cores} threads={item.threads} pci={item.pciExpress} cache={item.cacheTotal} boost={item.boostClock} base={item.baseClock} cooler={item.cooler} tdp={item.TDP} vel={item.velocidadeMemoria} mem={item.memoria} canais={item.canaisMemoria}/>)
            case 'mb':
            case 'ram':
            case 'gpu':
            case 'pwr':
            default:
                return alert('Erro inesperado')
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