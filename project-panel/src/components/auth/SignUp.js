import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';

import {signUp} from '../../store/action/authAction';

const SignIn = () => {
    const [state, setState] = useState({Fname:'',Lname:'',email:'',password:''});
    const dispatch = useDispatch();
    const authError = useSelector(state => state.auth.error);
    const auth = useSelector(state => state.firebase.auth)

    const onSubmit = (e) => {
        e.preventDefault()
       dispatch(signUp(state));
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
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="Fname" onChange={onChange} name="Fname"/>
                </div>
                <div className="input-field">
                    <label htmlFor="Lname">Last Name</label>
                    <input type="text" id="Lname" onChange={onChange} name="Lname"/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={onChange} name="email"/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={onChange} name="password"/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">SingUp</button>
                    <div className="red-text center">
                        {authError? <p>{authError}</p>: null}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
