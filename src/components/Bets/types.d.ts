import {
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

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
  onDeleteBet: Function;
  navigation: INavigation;
}

interface INavigation<T extends Object = {}> extends NavigationScreenProp<NavigationState, T> {}
