export default interface BetsConfig {
  bets: Array<{
    id: string;
    gameId: string;
    price: string;
  }>;
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
  deleteBet: Function;
  navigation: {closeDrawer: Function};
}
