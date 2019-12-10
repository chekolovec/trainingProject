import * as types from '../../constants/ActionTypes'

function reducer(state = [], action) {
    switch(action.type){
        case types.DATA_RECEIVED:
            return action.data
        default:
            return state        
    }
}

export default reducer