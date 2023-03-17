import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthSliceAction } from '../store/AuthSlice'
import { CounterSliceAction } from '../store/CounterSlice'

const Counter = () => {
    const dispatch=useDispatch()
    const counter=useSelector((state)=>state.increment.counter)
    const counter2=useSelector((state)=>state.increment.counter2)
    const toggle=useSelector((state)=>state.toggle1.toggle)

    const incrementHandler=()=>{
        dispatch({type:'INCREMENT'})
    }
    const decrementHandler=()=>{
        dispatch({type:'DECREMENT'})
    }
    const incrementby5Handler=()=>{
        dispatch({type:'INCREMENTBY5'})
    }
    const toggleHandler=()=>{
        dispatch({type:'toggle'})
    }

    // const logoutHandler=()=>{
    //     dispatch(AuthSliceAction.logout())
    // }
  return (
    <div>
    <div>counter</div>
    <div>{counter}</div>
    {toggle && <div>{counter2}</div>}
    <button onClick={incrementHandler}>increment</button>
    <button onClick={decrementHandler}>decrement</button>
    <button onClick={incrementby5Handler}>incrementby5</button>
    <button onClick={toggleHandler}>toggle</button>
    {/* <button type="button" onClick={logoutHandler}>Logout</button> */}
    </div>
  )
}

export default Counter