import {useSelector} from 'react-redux';
import { SET_CPU, SET_GPU, SET_MB, SET_PWR, SET_RAM } from "../actions";

const INITIAL_STATE = {
    tipoComponent: 'cpu',
    cpu: {nome: 'Processador', soq: null},
    mb: {nome: 'Placa-mãe', soq: null, vel: null},
    ram: {nome: 'Memória RAM', vel: null},
    gpu: {nome: 'Placa de Vídeo', pwr: null},
    pwr: {nome: 'Fonte', pot: null}
};



function configReducer(state = INITIAL_STATE, action){
    //console.log(state);
    
    switch (action){
        case SET_CPU:
            state.CPU = action.data;
            if (state.CPU.soq != state.MB.soq){
                state.MB.MB = 'Placa-mãe';
                state.MB.vel = null;
                state.MB.soq = null;
            }
            return state;
        case SET_MB:
            state.MB = action.data;
            if(state.MB.vel < state.RAM.vel){
                state.RAM.RAM = 'Memória RAM';
                state.RAM.vel = null;
            }
            return state;
        case SET_RAM:
            state.RAM = action.data;
            return state;
        case SET_GPU:
            state.GPU = action.data;
            if(state.GPU.pwr > state.PWR.pot){
                state.PWR.PWR = 'Fonte';
                state.PWR.pot = null;
            }
            return state;
        case SET_PWR:
            state.PWR = action.data;
            return state;
        default:
            return state;
    }
}

export default configReducer;