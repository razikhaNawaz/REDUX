import { createSlice } from "@reduxjs/toolkit"


const initialState={
    counter:0,
    initialToggle:true

}
const CounterSlice=createSlice({
    name:'Counter',
    initialState: initialState,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        toggle(state){
            state.initialToggle=!state.initialToggle
        },
        INCREMENTBY5(state){
            state.counter=state.counter+5
        },
        DECREMENTBY5(state){
            state.counter=state.counter-5
        }

    }
    

})
export const CounterSliceAction=CounterSlice.actions
export default CounterSlice.reducer
