import React, { useContext, useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";

import {ThemeContext} from "../../context";
import styles from "./styles";
import SelectionConfig from "./types";

export default ({ bets, betObject, onAddBet, onDeleteBet, gameId }: SelectionConfig) => {
  const { isThemeBlack } = useContext(ThemeContext);

  const handleBet = (obj: object, id: string) => () => {
    if (bets.some((bet) => bet.id === betObject.id)) {
      onDeleteBet(obj, id);
    } else {
      onAddBet(obj, id);
    }

  };
  const isActive = useMemo(() => bets.some((bet: {id: string}) => bet.id === betObject.id), [bets, betObject.id]);
  return (
      <TouchableOpacity
      style={
              isActive
              ? styles.betButtonActive
              : styles.betButton
            }
      key={betObject.name}
      onPress={handleBet(betObject, gameId)}
    >
      <Text style={
        isThemeBlack
        ? styles.name
        : null
      }>{betObject.name}</Text>
      <Text style={
        isThemeBlack
        ? styles.priceBlack
        : styles.textCenter
        }>{betObject.price}</Text>
    </TouchableOpacity>
  );
};
