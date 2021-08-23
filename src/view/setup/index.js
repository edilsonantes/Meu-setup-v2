import React, {useEffect, useState} from 'react';
import './setup.css';
import NavbarTop from '../../components/navbarTop';
import NavbarMenu from '../../components/navbarMenu';
import Footer from '../../components/footer';
import ComponentCard from '../../components/componentcard';
import {Link} from 'react-router-dom';
import ChosenComponents from '../../components/chosencomponents';


function Setup() {
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
                                    <ComponentCard />    
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