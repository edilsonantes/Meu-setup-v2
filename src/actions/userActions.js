import firebase from '../config/firebase';
import 'firebase/auth';
import {useSelector} from 'react-redux';

export const LOGIN = 'LOGIN';
const userLogin = usuarioEmail =>({
    type: LOGIN,
    usuarioEmail
})

export const LOGOUT = 'LOGOUT';


export const fazerLogin = (email, senha, dispatch) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(resultado => {
            const action = userLogin(resultado.user.email);
            dispatch(action)
            
        })
        .catch(erro => {
            alert(erro);
        })
    
}