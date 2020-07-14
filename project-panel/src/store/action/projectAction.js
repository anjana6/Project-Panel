
export const createProject = (project) => {
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
        ...project,
        firstName: profile.firstName,
        lastName:profile.lastName,
        userId: authorId,
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