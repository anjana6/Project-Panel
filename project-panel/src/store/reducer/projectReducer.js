const initialState = {
    error:null
} 

const projectReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'CREATE_PEOJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            return {...state,error:action.payload}
        default:
            return state;
    }
}

export default projectReducer;