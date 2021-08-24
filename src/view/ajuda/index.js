import React from 'react';
import './ajuda.css';
import NavbarTop from '../../components/navbarTop';
import NavbarMenu from '../../components/navbarMenu';
import Footer from '../../components/footer';


function Ajuda() {
    return(
        <div>
            
            <NavbarTop />
            <NavbarMenu />
            <div className='container text-center viewport'>
                <h3> Para conseguir ajuda entre em contato com nosso suporte:</h3>
                <h4>suporte@meusetup.com</h4>
            </div>
            <Footer />
            
        </div>
    )
}

export default Ajuda;