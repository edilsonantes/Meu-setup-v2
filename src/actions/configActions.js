import firebase from 'firebase';


export const SET_CPU = 'SET_CPU';
const setCPU = (proc) => ({
    type: SET_CPU,
    data: proc
});

export const SET_MB = 'SET_MB';
const setMB = (placa) => ({
    type: SET_MB,
    data: placa
});

export const SET_RAM = 'SET_RAM';
const setRAM = (RAM) => ({
    type: SET_RAM,
    data: RAM
})


export const SET_GPU = 'SET_GPU';
const setGPU = (GPU) => ({
    type: SET_GPU,
    data: GPU
})


export const SET_PWR = 'SET_PWR';
const setPWR = (PWR) => ({
    type: SET_PWR,
    data: PWR
})

export const SET_TIPO = 'SET_TIPO';
const setTipo = (tipo) => ({
    type: SET_TIPO,
    data: tipo
})




export const set_CPU = (nome,soq,dispatch) => {
    const proc = {nome,soq};
    const action = setCPU(proc);
    dispatch(action);
}

export const set_MB = (nome,soq,vel,dispatch) => {
    const placa = {nome,soq,vel}
    const action = setMB(placa);
    dispatch(action);
}

export const set_RAM = (nome,vel,dispatch) => {
    const memoria = {nome,vel}
    const action = setRAM(memoria);
    dispatch(action);
}

export const set_GPU = (nome,pwr,dispatch) => {
    const placa = {nome,pwr};
    const action = setGPU(placa);
    dispatch(action);
}

export const set_PWR = (nome,pot,dispatch) =>{
    const fonte = {nome,pot};
    const action = setPWR(fonte);
    dispatch(action);
}


export const set_tipo = (tipo, dispatch) => {
    const action = setTipo(tipo);
    dispatch(action);
}