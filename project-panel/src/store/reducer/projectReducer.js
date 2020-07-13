const initialState = {
    projects: [
        {id:'1',title:'anjana shakthi',content:'react-project'},
        {id:'2',title:'kavee shakthi',content:'nodejs project'}
    ]
} 

const projectReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'CREATE_PEOJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create erro',action.payload);
            return state;
        default:
            return state;
    }
}

export default projectReducer