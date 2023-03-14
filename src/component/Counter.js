import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthSliceAction } from '../store/AuthSlice'
import { CounterSliceAction } from '../store/CounterSlice'

const Counter = () => {
    const dispatch=useDispatch()
    const counter=useSelector((state)=>state.Counter.counter)

    const incrementHandler=()=>{
        dispatch(CounterSliceAction.increment())
    }
    const decrementHandler=()=>{
        dispatch(CounterSliceAction.decrement())
    }
    const incrementby5Handler=()=>{
        dispatch(CounterSliceAction.INCREMENTBY5())
    }
    const decrementby5Handler=()=>{
        dispatch(CounterSliceAction.DECREMENTBY5())
    }

    const logoutHandler=()=>{
        dispatch(AuthSliceAction.logout())
    }
  return (
    <div>
    <div>counter</div>
    <div>{counter}</div>
    <button onClick={incrementHandler}>increment</button>
    <button onClick={decrementHandler}>decrement</button>
    <button onClick={incrementby5Handler}>incrementby5</button>
    <button onClick={decrementby5Handler}>decrementby5</button>
    <button type="button" onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Counter