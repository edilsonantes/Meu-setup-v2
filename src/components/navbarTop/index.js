import React from 'react';
import './navbarTop.css';
import {Link} from 'react-router-dom';
import imagem from '../../img/page/MEUSETUP.png'


function NavbarTop() {
    return(
        <nav className="nav navbar navbar-expand-md fixed-top cabecalho">
            <div className="container color">
                <div className="logo">
                    <Link to='/'>
                        <img className="color" height="50" src={imagem}/>
                    </Link>
                </div>
                <div className="float-right color">
                    <Link to='Cadastrar' id = "cadastro" className= "btn btn-warning mx-1">Cadastre-se</Link>
                    <Link to='Login' className= "btn btn-outline-secondary mx-1 color">Entrar</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavbarTop;