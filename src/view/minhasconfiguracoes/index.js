import React, {useState, useEffect} from 'react';
import './minhasconfiguracoes.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import NavbarTop from '../../components/navbarTop';
import SideMenu from '../../components/sidemenu';
import MinhaConfig from '../../components/minhaconfig';
import {useSelector} from 'react-redux';


function Minhasconfiguracoes(){
    
    var email = useSelector(state => state.user.usuarioEmail);
    var id = null;
    const [configs, setConfigs] = useState([]);
    var listaConfigs = [];
    
    useEffect( () => {
        firebase.firestore().collection('usuarios').where('email', '==', email).get().then( async (resultado) => {
            await resultado.docs.forEach( (doc) => {
                id = doc.id;
            })
            
            firebase.firestore().collection(`usuarios/${id}/configs`).get().then( async (resultado) => {
                await resultado.docs.forEach( (doc) => {
                    console.log(doc.id);
                    listaConfigs.push({
                        id:doc.id,
                        ...doc.data()
                    })
                })
                
                setConfigs(listaConfigs);
            })
            
        })
        
    });
    
    return (
        <>
            <NavbarTop />
            <div className="container">
                <div className="col-md-12">
                    <div className="row justify-content-center">
                        <div className="col-md-4 ">
                            <SideMenu />
                        </div>
                        <div className="col-md-8 margem-top text-center">
                            <div className="row">
                                {
                                    configs.map(item => <MinhaConfig key={item.id} nome={item.nome} cpu={item.config.cpu.nome} gpu={item.config.gpu.nome} mb={item.config.mb.nome} pwr={item.config.pwr.nome} ram={item.config.ram.nome} id={id}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}

export default Minhasconfiguracoes;