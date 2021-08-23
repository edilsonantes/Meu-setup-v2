import {LOGIN, LOGOUT} from '../actions/';


const INITIAL_STATE = {
    usuarioEmail: '',
    usuarioTipo: '',
    usuarioLogado: '',
    usuarioNome: '',
};

function usuarioReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, usuarioLogado: 1, usuarioEmail: action.usuarioEmail, usuarioTipo: action.usuarioTipo, usuarioNome: action.usuarioNome}
        case LOGOUT:
            return {...state, usuarioLogado: 0, usuarioEmail: null, usuarioTipo: null, usuarioNome: null}
        default:
            return state;
    }
}

export default usuarioReducer;