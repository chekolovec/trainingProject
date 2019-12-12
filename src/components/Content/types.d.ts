export default interface ContentConfig {
  data: Array<{
    markets: Array<{
      id: string;
      name: string;
      selections: Array<{
        id: string;
        name: string;
        price: string;
      }>
    }>;
    name: string;
    id: string;
  }>;
  getData: Function;
  pickBet: Function;
  bets: Array<{
    id: string;
  }>;

}
