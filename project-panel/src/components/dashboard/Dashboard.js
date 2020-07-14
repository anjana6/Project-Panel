import React from 'react';
import {connect} from 'react-redux';
import Notifications from './Notification';
import ProjectList from '../projects/ProjectList';
import {useSelector} from 'react-redux';
// import {firestoreConnect} from 'react-redux-firebase';
import {useFirestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
    //const projects = useSelector(state => state.project.projects);
    useFirestoreConnect([{collection:'projects'}])
    const projects = useSelector(state => state.firestore.ordered.projects);
    const auth = useSelector(state => state.firebase.auth)
    
    if(!auth?.uid) return <Redirect to='/signin' />
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications/>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     console.log(state);
//     return{
//         projects: state.fires.ordered.projects
//     }
// }

export default Dashboard;

// export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([
//         {collection: 'projects'}
//     ])
// )(Dashboard);
