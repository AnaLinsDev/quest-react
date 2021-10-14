import {combineReducers } from 'redux'
import questsReducer from './quests/quests.reducer';

/* 
    o root-reducer será a base de todo o state da aplicação,
    ou seja, sempre que ocorrer uma mudançã, deve passar por aqui
*/

const rootReducer = combineReducers({
    quests : questsReducer,
})


export default rootReducer;








