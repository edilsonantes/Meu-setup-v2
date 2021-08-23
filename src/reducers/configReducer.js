import {useSelector} from 'react-redux';
import {SET_EMAIL} from '../actions';

const INITIAL_STATE = {
    usuarioEmail: '',
    tipoComponent: 'cpu',
    cpu: '',
    mb: '',
    ram: '',
    gpu: '',
    pwr: ''
};



function configReducer(state = INITIAL_STATE, action){
    //console.log(state);
    
    switch (action){
        case SET_EMAIL:
            return {...state, usuarioEmail: action.email};
        default:
            return state;
    }
}

export default configReducer;