

import { createStore } from "redux"

const initialState={
    counter:0
}

const reducerFun=(state=initialState, action)=>{
if(action.type==='INCREMENT'){
    return {
        counter:state.counter+5
    }
}
if(action.type==='DECREMENT'){
    return {
        counter:state.counter-1
    }
}
return state
}

const store=createStore(reducerFun)
export default store