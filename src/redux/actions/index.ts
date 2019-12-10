import * as types from '../../constants/ActionTypes'

export const getDataSuccess = (data) => ({
    type: types.DATA_RECEIVED,
    data
})

export const getDataErr = (error) => ({
    type: types.DATA_ERROR,
    error
})

export const pickBet = (betObj) => ({
    type: types.PICK_BET,
    betObj
})
