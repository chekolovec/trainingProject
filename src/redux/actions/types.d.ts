export interface getDataSuccessConfig {
  data: object;
}

export interface getDataErrConfig {
  err: object;
}

export interface toggleBetConfig {
  (betObj: object, gameId: string);
}

export interface deleteBetConfig {
  (betObj: object);
}
