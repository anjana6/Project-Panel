import React from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase'

const UserList = () => {
    useFirestoreConnect([{collection:'users'}])
    const users = useSelector(state => state.firestore.ordered.users);
    return (
        <div>
            <h4 className="center">Users</h4>
            {users && users.map(user => {
                return (
                    <div className="card 2-depth-0 " key={user.id}>
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">{user.firstName} {user.lastName}</span>
                    </div>
                </div> 
                )
            })}
        </div>
    )
}

export default UserList;
