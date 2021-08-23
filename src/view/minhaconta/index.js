import React, {useState} from 'react';
import './minhaconta.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import NavbarTop from '../../components/navbarTop';
import NavbarMenu from '../../components/navbarMenu';
import Footer from '../../components/footer';

function Minhaconta(){
    return (
        <h1>Minha conta</h1>
    )
}

export default Minhaconta;
