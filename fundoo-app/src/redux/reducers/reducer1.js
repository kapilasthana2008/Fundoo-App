const initialState = {
        headerMenu:false,
        headerGrid:""
}   

export function reducer(state =initialState,action){



    switch(action.type){

        case 'ADD_POST':{

            return {
                ...state,
                headerMenu:action.value
            }
        }

        default:
        return state
    
}
}

