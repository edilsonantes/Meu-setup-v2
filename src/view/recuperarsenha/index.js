import React, {useState} from 'react';
import './recuperarsenha.css';
import firebase from '../../config/firebase';
import {Link} from 'react-router-dom';
import 'firebase/auth';
import NavbarMenu from '../../components/navbarMenu';
import NavbarTop from '../../components/navbarTop';
import Footer from '../../components/footer';

function Recuperarsenha(){
    
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();
    
    function recSenha(){
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg("Um email para redefinir sua senha foi enviado.")
        }).catch(error => {
            setMsg("Por favor insira um email válido.")
        })
    }

    return (
        <div>
            <NavbarTop />
            <NavbarMenu />


            <div className="container mt-3">
                <form action="" method="POST" id="form_cadastro">
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <div className="text-center mt-3 p-1">
                                <p>Recuperação de senha</p>
                            </div>
                            <div className="mx-5">
                                <label for="email" className="form-label">E-mail:</label><br/>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="campo mb-3" id="email"/>
                            </div>
                            <div className="mx-5 text-center">
                                <span>{msg}</span>
                            </div>
                            <div className="mx-5 mt-5 text-center">
                                <input onClick={recSenha} type="button" value="Recuperar Senha" className="btn btn-warning" id="recsenha"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Recuperarsenha;
