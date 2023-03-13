

import { createStore } from "redux"

const initialState={
    counter:0
}

const reducerFun=(state=initialState, action)=>{
if(action.type==='INCREMENT'){
    return {
        counter:state.counter+1
    }
}
if(action.type==='DECREMENT'){
    return {
        counter:state.counter-1
    }
}
if(action.type==='INCREMENTBY5'){
    return {
        counter:state.counter+5
    }
}
if(action.type==='DECREMENTBY5'){
    return {
        counter:state.counter-5
    }
}
return state
}

const store=createStore(reducerFun)
export default store