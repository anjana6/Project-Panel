import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
        </ul>
    )
}

export default SignInLink
