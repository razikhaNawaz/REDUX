

import { createStore } from "redux"

const initialState={
    counter:0
}

const reducerFun=(state=initialState, action)=>{
if(action.type==='INCREMENT'){
    return {
        counter:state.counter+2
    }
}
if(action.type==='DECREMENT'){
    return {
        counter:state.counter-2
    }
}
return state
}

const store=createStore(reducerFun)
export default store