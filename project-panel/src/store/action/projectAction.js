export const createProject = (project) => dispatch => {
    console.log(project);
    dispatch({
        type:'CREATE_PROJECT',
        payload: project,
    })
}