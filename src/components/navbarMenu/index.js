import React from 'react';
import './navbarMenu.css';
import {Link} from 'react-router-dom';


function NavbarMenu() {
    return(
        <nav className="nav navbar navbar-expand-md menu">
            <div className="container justify-content-center">
                <Link to='/' className="text-decoration-none px-sm-2 link text-light mx-2">Home </Link>
                <Link to='setup' className="text-decoration-none px-sm-2 link text-light mx-2">Comece seu Setup </Link>
                <Link to='ajuda' className="text-decoration-none px-sm-2 link text-light mx-2">Ajuda</Link>
            </div>
        </nav>
    )
}

export default NavbarMenu;