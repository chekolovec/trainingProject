import {
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

export default interface HomeScreenConfig {
  navigation: INavigation;
}

interface INavigation<T extends Object = {}> extends NavigationScreenProp<NavigationState, T> {}
