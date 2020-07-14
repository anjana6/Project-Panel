import React from 'react';
import moment from 'moment';


const ProjectItem = ({project}) => {
    return (
        <div className="card 2-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project?.title}</span>
                <p>{project?.content}</p>
                <p className="grey-text">{moment(project?.createAt?.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectItem;
