import firebase from '../config/firebase';
import 'firebase/auth';
import {useSelector} from 'react-redux';

export const LOGIN = 'LOGIN';
const userLogin = (usuarioEmail,usuarioTipo,usuarioNome) =>({
    type: LOGIN,
    usuarioEmail, 
    usuarioTipo,
    usuarioNome
})

export const LOGOUT = 'LOGOUT';


export const fazerLogin = (email, senha, dispatch) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(resultado => {
            firebase.firestore().collection(`/usuarios`).where('email','==', resultado.user.email).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const user = doc.data();
                    const usuarioTipo = user.tipo;
                    const usuarioNome = user.nome;
                    const action = userLogin(resultado.user.email, usuarioTipo, usuarioNome);
                    dispatch(action)
                });
            })  
        })
        .catch(erro => {
            alert("Usuario ou senha inválidos");
        })
    
}