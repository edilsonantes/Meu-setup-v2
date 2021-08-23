import { combineReducers } from "redux";
import usuarioReducer from './usuarioReducer';
import configReducer from './configReducer';

export default combineReducers ({
    user: usuarioReducer,
    config: configReducer
})