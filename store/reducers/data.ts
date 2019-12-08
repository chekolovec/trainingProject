const initialState = {};

function reducer(state = initialState, action) {
    switch(action.type){
        case "DATA_RECEIVED":
            console.log(action.data)
            return {data: action.data}
        default:
            return state        
    }
}

export default reducer