import React, {useState} from 'react';
import './minhasconfiguracoes.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import NavbarTop from '../../components/navbarTop';
import SideMenu from '../../components/sidemenu';
import Footer from '../../components/footer';

function Minhasconfiguracoes(){
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
                            <h4>configs</h4>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}

export default Minhasconfiguracoes;