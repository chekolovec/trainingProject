import * as types from '../../constants/ActionTypes'

export const getDataSuccess = (data) => ({
    type: types.DATA_RECEIVED,
    data
})

export const getDataErr = (error) => ({
    type: types.DATA_ERROR,
    error
})

export const toggleBet = (betObj, gameId) => ({
    type: types.TOGGLE_BET,
    betObj,
    gameId: gameId
})
