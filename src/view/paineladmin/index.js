import React, {useState} from 'react';
import './paineladmin.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import NavbarTop from '../../components/navbarTop';
import NavbarMenu from '../../components/navbarMenu';
import Footer from '../../components/footer';


function Paineladmin(){
    return (
        <h1>Painel Admin</h1>
    )
}

export default Paineladmin;