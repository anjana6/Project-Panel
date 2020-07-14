import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';

import {signIn} from '../../store/action/authAction';

const SignIn = () => {
    const [state, setState] = useState({email:'',password:''});
    const dispatch = useDispatch();
    const authError = useSelector(state => state.auth.error);
    const auth = useSelector(state => state.firebase.auth)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(state);
        dispatch(signIn(state))
    }

    const onChange = (e) => {
        setState({...state,[e.target.name]: e.target.value})
    }

    if(auth?.uid) return <Redirect to='/'/>

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={onChange} name="email"/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={onChange} name="password"/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className="red-text center">
                        {authError? <p>{authError}</p>: null}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
