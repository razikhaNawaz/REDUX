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
    const incrementby5Handler=()=>{
        dispatch({type:'INCREMENTBY5'})
    }
    const decrementby5Handler=()=>{
        dispatch({type:'DECREMENTBY5'})
    }
  return (
    <div>
    <div>counter</div>
    <div>{counter}</div>
    <button onClick={incrementHandler}>increment</button>
    <button onClick={decrementHandler}>decrement</button>
    <button onClick={incrementby5Handler}>incrementby5</button>
    <button onClick={decrementby5Handler}>decrementby5</button>
    </div>
  )
}

export default Counter