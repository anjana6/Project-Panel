import React from 'react';
import {useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';

import {signOut} from '../../store/action/authAction';

const SignInLink = ({profile}) => {
    const dispatch = useDispatch()
    
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/signin' onClick={() => dispatch(signOut())} >Log Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">{profile?.firstName?.charAt(0)}</NavLink></li>
        </ul>
    )
}

export default SignInLink;
