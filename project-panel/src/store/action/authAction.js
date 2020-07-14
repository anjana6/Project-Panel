export const signIn = (data) => {
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
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(() =>{
            dispatch({
                type: 'SINGOUT_SUCCESS'
            })
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=>{
            return firestore.collection('users').doc(res.user.uid ).set({
                firstName:newUser.Fname,
                lastName: newUser.Lname,
            })
        }).then(()=>{
            dispatch({
                type:'SIGNUP_SUCCESS'
            })
        }).catch(err =>{
            console.log(err.message);
            dispatch({
                type:'SIGNUP_ERROR',
                payload:err.message
            })
        })
    }
}