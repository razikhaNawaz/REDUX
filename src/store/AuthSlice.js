import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isAuthenticate:false
}
const AuthSlice=createSlice({
    name:'Authentication',
    initialState:initialState,
    reducers:{
        login(state){
            state.isAuthenticate=true
        },
        logout(state){
            state.isAuthenticate=false
        }
    }
    
})
export const AuthSliceAction=AuthSlice.actions
export default AuthSlice.reducer 