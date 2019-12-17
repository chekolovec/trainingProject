import { createContext } from "react";

import {IBetsContext, IThemeContext} from "./types";

export const ThemeContext = createContext<IThemeContext>({isThemeBlack: false});

export const BetsContext = createContext<IBetsContext>({bets: null});
