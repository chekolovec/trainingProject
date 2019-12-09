const initialState = {};

function reducer(state = initialState, action) {
    switch(action.type){
        case "DATA_RECEIVED":
            return state['info'] = action.data
        default:
            return state        
    }
}

export default reducer