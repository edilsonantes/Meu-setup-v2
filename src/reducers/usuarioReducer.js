import {LOGIN, LOGOUT} from '../actions/index';


const INITIAL_STATE = {
    usuarioEmail: '',
    usuarioLoagdo: ''
};

function usuarioReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, usuarioLogado: 1, usuarioEmail: action.usuarioEmail}
        case LOGOUT:
            return {...state, usuarioLogado: 0, usuarioEmail: null}
        default:
            return state;
    }
}

export default usuarioReducer;