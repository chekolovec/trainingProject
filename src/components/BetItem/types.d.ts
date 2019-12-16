export default interface BetItemConfig {
  name: string;
  onDelete: Function;
  gameId: string;
  betObj: {
    price: string;
  };

}
