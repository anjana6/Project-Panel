import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';

const Navbar = () => {
    const auth = useSelector(state => state.firebase.auth);
    const profile = useSelector(state => state.firebase.profile);
    //console.log(profile);
   

    const checkAuth = auth.isEmpty ? <SignOutLink/> : <SignInLink profile={profile} />;
    
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/'>ProjectPanel</Link>
                {checkAuth}
            </div>
        </nav>
    )
}

export default Navbar
