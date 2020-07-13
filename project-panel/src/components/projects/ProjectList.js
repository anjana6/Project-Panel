import React from 'react';
import {Link} from 'react-router-dom';
import ProjectItem from './ProjectItem';

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
           
            {projects && projects.map(project =>{
                return(
                    <Link to={`/project/${project.id}`}  key={project.id}>
                        <ProjectItem project={project}/>
                    </Link>
                    
                )
            })}
            
        </div>
    )
}

export default ProjectList
