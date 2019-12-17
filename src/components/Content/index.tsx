import React, { useContext, useEffect } from "react";
import {
  Text, View,
} from "react-native";
import { connect } from "react-redux";

import {ThemeContext} from "../../context";
import { addBet, deleteBet, getData, getDataSuccess } from "../../redux/actions";
import Selection from "../Selection";
import ThemeSwitch from "../ThemeSwitch";
import styles from "./styles";
import ContentConfig from "./types";
import { BetsContext } from '../../context'
import withBets from "../../hoc"
import BetsCounter from "../BetsCounter";

const Content = ({ data, getData, bets, onAddBet, onDeleteBet }: ContentConfig) => {
  useEffect(() => { getData(); }, []);
  const { isThemeBlack } = useContext(ThemeContext);

  return (
    <View style={styles.contentWrapper}>
      <View>
        {data.length ? data.map((pos) => {
          if (!pos.markets.length) {
            return null;
          }
          return (
            <View style={
              isThemeBlack ?
              styles.gameWrapperBlack :
              styles.gameWrapper
              } key={pos.name}>
              <Text style={
                isThemeBlack ?
                styles.titleBlack :
                styles.title
                }>
                {pos.name}
              </Text>
              {pos.markets.map((elem) => (
                <View key={elem.name}>
                  <Text style={
                    isThemeBlack ?
                    styles.objectiveBlack :
                    styles.objective
                    }>
                    {elem.name}
                  </Text>
                  <View style={styles.buttonsWrapper}>
                    {elem.selections.map((betObject) => (
                      <Selection
                        onAddBet={onAddBet}
                        onDeleteBet={onDeleteBet}
                        bets={bets}
                        gameId={pos.id}
                        betObject={betObject}
                        key={betObject.id}
                      />
                    ))}
                  </View>
                </View>
              ))}
            </View>
          );
        })
          : <Text style={styles.textCenter}>Loading...</Text>}
      </View>
      <ThemeSwitch />
      <BetsContext.Provider value={bets}>
        <BetsCounter />
      </BetsContext.Provider>
    </View>
  );
};

const mapStateToProps = (state: { data: object[]; bets: object[]; }) => ({
  bets: state.bets,
  data: state.data,
});

const mapDispatchToProps = {
  getData,
  onAddBet: addBet,
  onDataReceived: getDataSuccess,
  onDeleteBet: deleteBet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
