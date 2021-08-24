import React, {useState} from 'react';
import './sidemenu.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';

function SideMenu() {
    return (
        <>
            <div className="menu">
                <ul className="lista">
                    <li className="my-5"><Link to='setup' className="text-decoration-none py-sm-2 link text-light mt-4" href= "index.html">Criar nova configuração</Link></li>
                    <li className="my-5"><Link to='minhasconfiguracoes' className="text-decoration-none py-sm-2 link text-light mt-4">Minhas configurações</Link></li>
                    <li className="my-5"><Link to='' className="text-decoration-none py-sm-2 link text-light mt-4">Meus dados</Link></li>
                </ul>
            </div>
        </>
    )
}

export default SideMenu