import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
           
            {projects && projects.map(project =>{
                return(
                    <ProjectItem project={project} key={project.id}/>
                )
            })}
            
        </div>
    )
}

export default ProjectList
