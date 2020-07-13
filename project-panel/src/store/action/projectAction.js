
export const createProject = (project) => {
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
        console.log(project);
    const firestore = getFirestore();
    firestore.collection('projects').add({
        ...project,
        firstName: 'Anjana',
        lastName:'Shakthi',
        userId: 12356,
        createAt: new Date()
    }).then(() =>{
        dispatch({
            type:'CREATE_PROJECT',
            payload: project,
        })
    }).catch((err) =>{
        dispatch({
            type:'CREATE_PROJECT_ERROR',
            payload:err
        })
    })
    }
    
    
}