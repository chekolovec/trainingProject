import {
  deleteBetConfig,
  getDataErrConfig,
  getDataSuccessConfig,
  toggleBetConfig } from "./types";

export const GET_DATA = "GET_DATA";
export const DATA_RECEIVED = "DATA_RECEIVED";
export const DATA_ERROR = "DATA_ERROR";
export const ADD_BET = "ADD_BET";
export const DELETE_BET = "DELETE_BET";
export const TOGGLE_THEME = "TOGGLE_THEME";

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

export const addBet: toggleBetConfig = (betObj, gameId) => {
  return ({
  type: ADD_BET,
  betObj,
  gameId,
}); };

export const deleteBet: deleteBetConfig = (betObj) => {
  return ({
    type: DELETE_BET,
    betObj,
  });
};

export const toggleTheme = (isThemeBlack: boolean) => ({
  type: TOGGLE_THEME,
  isThemeBlack,
});
