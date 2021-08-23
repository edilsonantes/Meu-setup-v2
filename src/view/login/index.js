import React, {useState} from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';
import NavbarTop from '../../components/navbarTop';
import NavbarMenu from '../../components/navbarMenu';
import Footer from '../../components/footer';
import {useDispatch, useSelector} from 'react-redux';
import {fazerLogin} from '../../actions';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const dispatch = useDispatch();

  

    return(
        <div>
            
            <NavbarTop />
            <NavbarMenu />
            {
                
                useSelector(state => state.user.usuarioLogado) > 0 ? <Redirect to="/" /> :null
            }

            <div className="container mt-3">
                <form className="" action="" method="POST" id="form_cadastro">
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <div className="text-center mt-3 p-1">
                                <p>Bem vindo(a) de volta</p>
                            </div>
                            <div className="mx-5">
                                <label for="email" className="form-label">E-mail:</label><br/>
                                <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" className="campo mb-3" id="email"/>
                            </div>
                            <div className="mx-5">
                                <label for="senha" className="form-label">Senha:</label><br/>
                                <input onChange={(e) => setSenha(e.target.value)} type="password" name="senha" className="campo mb-3" id="senha"/>
                            </div>
                            <div className="mx-5 text-center">
                                <Link className="text-white"to="/recuperarsenha">Recuperar senha</Link>
                            </div>
                            <div className="mx-5 mt-5 text-center">
                                <input className="btn btn-warning" value="Login" type="button" id="login" onClick={() => fazerLogin(email, senha, dispatch)}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <Footer />
            
        </div>
    )
}

export default Login;