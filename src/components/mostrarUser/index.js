import React from 'react';
import './mostrarUser.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function MostrarUser(){
    const dispatch = useDispatch();
    var link = '';
    var label = '';
    
    if(useSelector(state => state.user.usuarioTipo) == 0){
        label = 'Painel Admin'
        link = '/paineladmin'
    }else{
        label = 'Minha Conta'
        link = '/minhaconta'
    }
    
    return(
        <div className="row color">
            <div className="col-sm-3 color">
                <span className="material-icons-outlined md-36 color">account_circle</span>
            </div>
            <div className="col-sm-9 color aux">
                <p className="textoUser color">Olá {useSelector(state => state.user.usuarioNome)}</p><br/>
                <p className="textoUser color"><Link to={link} className="text-decoration-none text-light color">{label}   </Link>    
                   |   <Link className="text-decoration-none text-light color" onClick = {()=> dispatch({type: 'LOGOUT'})}>Sair</Link></p>
            </div>
        </div>
    );
}

export default MostrarUser;