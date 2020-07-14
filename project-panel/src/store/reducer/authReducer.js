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
        case 'SIGNUP_ERROR':
            return {...state,error:action.payload}
        case 'SIGNUP_SUCCESS':
            console.log('sucess');
            return {...state,error:null};
        
        default:
            return state;
    }
}


export default authReducer;