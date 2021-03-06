import { SET_CPU, SET_GPU, SET_MB, SET_PWR, SET_RAM, SET_TIPO, CANCELAR } from "../actions";

const INITIAL_STATE = {
    tipoComponent: 'cpu',
    cpu: {nome: 'Processador', soq: null},
    mb: {nome: 'Placa-mãe', soq: null, vel: null},
    ram: {nome: 'Memória ram', vel: null},
    gpu: {nome: 'Placa de Vídeo', pwr: null},
    pwr: {nome: 'Fonte', pot: null}
};



function configReducer(state = INITIAL_STATE, action){
    switch (action.type){
        case SET_CPU:
            state.cpu = action.data
            if (state.cpu.soq != state.mb.soq){
                state.mb.nome = 'Placa-mãe';
                state.mb.vel = null;
                state.mb.soq = null;
            }
            return state;
        case SET_MB:
            state.mb = action.data;
            if(state.mb.vel < state.ram.vel){
                state.ram.nome = 'Memória ram';
                state.ram.vel = null;
            }
            return state;
        case SET_RAM:
            state.ram = action.data;
            return state;
        case SET_GPU:
            state.gpu = action.data;
            if(state.gpu.pwr > state.pwr.pot){
                state.pwr.nome = 'Fonte';
                state.pwr.pot = null;
            }
            return state;
        case SET_PWR:
            state.pwr = action.data;
            return state;
        case SET_TIPO:
            state.tipoComponent = action.data;
            return state;
        case CANCELAR:
            state = action.data;
            return state;
        default:
            return state;
    }
}

export default configReducer;