const initialState = {
    error: null
}

const authReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            return {...state,error:"login fail"}
        case 'LOGIN_SUCCESS':
            return {...state,error:null};
        case 'SINGOUT_SUCCESS':
            console.log('singout'); 
            return state;
        default:
            return state;
    }
}


export default authReducer;