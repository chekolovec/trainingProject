import {
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

export default interface HeaderConfig {
  navigation: INavigation;
}

interface INavigation<T extends Object = {}> extends NavigationScreenProp<NavigationState, T> {}
