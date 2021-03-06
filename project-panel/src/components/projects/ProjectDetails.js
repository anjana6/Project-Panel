import React from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import moment from 'moment';

const ProjectDetails = (props) => {
    const {id} = props.match.params;
    useFirestoreConnect([{collection:'projects'}]);

    const project = useSelector(state => {
        const projects = state.firestore.data.projects
        return (projects? projects[id]: null);   
    })

    return (
        <div className="container section project-details">
        {project ?
            <div className="card 2-depth-0">
                <div className="card-content">
                    <span className="card-title">{project?.title}</span>
                        <p>{project?.content}</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>post by {project?.firstName}</div>
                    <div>{moment(project?.createAt?.toDate()).calendar()}</div>
                </div>
            </div>
            :
            <div className="container center">
                <h1>Loading ..........</h1>
            </div>
        }
        </div>
    )
}

export default ProjectDetails;
