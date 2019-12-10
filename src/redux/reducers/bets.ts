import * as types from '../../constants/ActionTypes'

export default function reducer(state = [], action) {
    switch(action.type) {
        case types.PICK_BET:
            if(state.some((item) => item.id === action.betObj.id)) {
                return state.filter((item) => item.id !== action.betObj.id)
            } else {
                return [...state, Object.assign(action.betObj, {
                    gameId: action.gameId,
                    marketId: action.marketId
                })]
            }
        case types.DELETE_BET:
            return state.map((id) => id !== action.id)
        default:
            return state
    }
}