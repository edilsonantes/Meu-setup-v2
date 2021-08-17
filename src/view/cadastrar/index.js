import React, {useState} from 'react';
import './cadastrar.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import NavbarTop from '../../components/navbarTop';
import NavbarMenu from '../../components/navbarMenu';
import Footer from '../../components/footer';


function Cadastrar(){
    
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [email, setEmail] = useState();
    const [confemail, setConfemail] = useState();
    const [senha, setSenha] = useState();
    const [confsenha, setConfsenha] = useState();
    const [carregando, setCarregando] = useState();
    
    function cadastro(){
        setCarregando(1);

        if(!nome || !sobrenome || !email || !confemail || !senha || !confsenha){
            alert('Todos os campos são obrigatórios');
        }

        if(email != confemail){
            setCarregando(0)
            alert('Emails não combinam')
            return
        }

        if (senha != confsenha){
            setCarregando(0)
            alert('Senhas não combinam')
            return
        }
        
        firebase.auth().createUserWithEmailAndPassword(email, senha).then(response => {
            setCarregando(0)
            alert('Usuário cadastrado com sucesso');
        }).catch(erro => {
            setCarregando(0)
            switch(erro.message){
                case 'Password should be at least 6 characters':
                    alert('A senha deve conter ao menos 6 caracteres')
                    break
                case 'The email address is already in use by another account.':
                    alert('Esse email já está em uso')
                    break
                case 'The email address is badly formatted.':
                    alert('Formato de email inválido')
                    break
                default:
                    alert('Ocorreu um erro desconhecido durante o cadastro. Por favor, tente mais tarde')
                    break
            }
        })
    }

    return(
        <div>
            
            <NavbarTop />
            <NavbarMenu />

            <div className="container mt-3">
                <form action="" method="POST" id="form_cadastro">
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <div className="text-center mt-3 p-1">
                                <p>Cadastre-se</p>
                            </div>
                            <div className="mx-5">
                                <label for="nome" className="form-label">Nome:</label><br/>
                                <input onChange={(e) => setNome(e.target.value)} type="text" name="nome" className="campo mb-3" id="nome"/>
                            </div>
                            <div className="mx-5">
                                <label for="sobrenome" className="form-label">Sobrenome:</label><br/>
                                <input onChange={(e) => setSobrenome(e.target.value)} type="text" name="sobrenome" className="campo mb-3" id="sobrenome"/>
                            </div>
                            <div className="mx-5">
                                <label for="email" className="form-label">E-mail:</label><br/>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="campo mb-3" id="email"/>
                            </div>
                            <div className="mx-5">
                                <label for="confemail" className="form-label">Confirmar e-mail:</label><br/>
                                <input onChange={(e) => setConfemail(e.target.value)} type="email" name="confEmail" className="campo mb-3" id="confemail"/>
                            </div>
                            <div className="mx-5">
                                <label for="senha" className="form-label">Senha:</label><br/>
                                <input onChange={(e) => setSenha(e.target.value)} type="password" name="senha" className="campo mb-3" id="senha"/>
                            </div>
                            <div className="mx-5">
                                <label for="confsenha" className="form-label">Confirmar senha:</label><br/>
                                <input onChange={(e) => setConfsenha(e.target.value)} type="password" name="confSenha" className="campo mb-3" id="confsenha"/>
                            </div>
                            <div className="mx-5 mt-5 text-center">

                                {carregando ? 
                                    <div class="spinner-border text-light" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div> :
                                    <input onClick={cadastro} type="button" value="Cadastrar" className="btn btn-warning" id="cadastro"/>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <Footer />

        </div>
    )
}

export default Cadastrar;