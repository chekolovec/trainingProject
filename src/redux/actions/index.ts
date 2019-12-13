import { getDataSuccessConfig, getDataErrConfig, toggleBetConfig } from './types';

export const GET_DATA = 'GET_DATA';
export const DATA_RECEIVED = 'DATA_RECEIVED';
export const DATA_ERROR = 'DATA_ERROR';
export const TOGGLE_BET = 'TOGGLE_BET';


export const getData = () => ({
  type: GET_DATA,
});

export const getDataSuccess = (data: getDataSuccessConfig) => ({
  type: DATA_RECEIVED,
  data,
});

export const getDataErr = (error: getDataErrConfig) => ({
  type: DATA_ERROR,
  error,
});

export const toggleBet: toggleBetConfig = (betObj, gameId) => {
  return ({
  type: TOGGLE_BET,
  betObj,
  gameId,
})};
