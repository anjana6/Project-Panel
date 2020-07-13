import React from 'react';
import {useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';

import {signOut} from '../../store/action/authAction';

const SignInLink = () => {
    const dispatch = useDispatch()
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink onClick={dispatch(signOut)} to='/'>Log Out</NavLink></li>
        </ul>
    )
}

export default SignInLink;
