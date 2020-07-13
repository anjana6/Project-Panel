export const signIn = (data) => {
    console.log(data);
    return (dispatch,getState,{getFirebase,getFireStore}) => {
        const firebase = getFirebase();
            firebase.auth().signInWithEmailAndPassword(
            data.email,
            data.password
        ).then(() =>{
            dispatch({
                type: 'LOGIN_SUCCESS'
            })
        }).catch((err) => {
            dispatch({
                type:'LOGIN_ERROR',
                payload: err
            })
        });
    }
}

export const signOut = () => {
    console.log('hai');
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(() =>{
            dispatch({
                type: 'SINGOUT_SUCCESS'
            })
        })
    }
}