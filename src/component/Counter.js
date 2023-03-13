import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const dispatch=useDispatch()
    const counter=useSelector((state)=>state.counter)

    const incrementHandler=()=>{
        dispatch({type:'INCREMENT'})
    }
    const decrementHandler=()=>{
        dispatch({type:'DECREMENT'})
    }
  return (
    <div>
    <div>counter</div>
    <div>{counter}</div>
    <button onClick={incrementHandler}>increment</button>
    <button onClick={decrementHandler}>decrement</button>
    </div>
  )
}

export default Counter