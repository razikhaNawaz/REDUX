import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AuthSliceAction } from '../store/AuthSlice'

const Authentication = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [login, setLogin]=useState(true)
    const dispatch=useDispatch()

    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }

    let url;
        if(login){
        url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzHLLsqManLbUhdsiXD3aVt7uLbFJ3BOg";
        } else{
            url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDzHLLsqManLbUhdsiXD3aVt7uLbFJ3BOg"
        }
        
        const auth=async()=>{
            try{
                const response=await fetch(url, {
                    method:'POST',
                    body:JSON.stringify({
                        email:email,
                        password:password,
                        returnSecureToken:false
                    }),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                const data=await response.json()
                console.log(data)
                if(!data.error){
                    dispatch(AuthSliceAction.login())
                }
                
                
            }
            catch(err){
                console.log(err);
            }

        }
       


    const submitHandler=(e)=>{
        e.preventDefault()
        auth()
        
    }
const switchHandler=()=>{
    setLogin(!login)
}


  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>Email</label>
            <input type="text" value={email} onChange={emailHandler}></input>
            <label>Password</label>
            <input type="text" value={password} onChange={passwordHandler}></input>
            <button type="submit">{login ? 'login':'signup'}</button>
            <button type="button" onClick={switchHandler}>{login ? "create an Account" : "login with account"}</button>
        </form>
    </div>
  )
}

export default Authentication