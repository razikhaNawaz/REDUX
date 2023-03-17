
import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import CounterSlice from './CounterSlice';

// const store=configureStore({
//     reducer:{
//         Counter:CounterSlice,
//         Authenticate:AuthSlice
//     }
// })
// export default store

import { combineReducers, createStore } from "redux"

const initialState={
    counter:0,
    counter2:5
    
}

const reducerFun=(state=initialState, action)=>{
if(action.type==='INCREMENT'){
    return {
        ...state,
        counter:state.counter+1
    }
}
if(action.type==='DECREMENT'){
    return {
        ...state,
        counter:state.counter-1
    }
}
if(action.type==='INCREMENTBY5'){
    return {
        ...state,
        counter2:state.counter2+5
    }
}
if(action.type==='DECREMENTBY5'){
    return {
        ...state,
        counter:state.counter-5
    }
}
return state
}

const initialState2={
    toggle:false
}

const toggleReducer=(state=initialState2, action)=>{
switch(action.type){
    case 'toggle':
        return {toggle:!state.toggle}
        default: 
        return state
}

}

const combineFun=combineReducers({
    increment:reducerFun,
    toggle1:toggleReducer
})



const store=createStore(combineFun)
export default store