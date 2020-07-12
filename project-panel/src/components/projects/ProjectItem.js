import React from 'react';


const ProjectItem = ({project}) => {
    return (
        <div className="card 2-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
    <span className="card-title">{project?.title}</span>
    <p>{project?.content}</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>
    )
}

export default ProjectItem;
