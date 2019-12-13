import React, { useEffect } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import { getData, getDataSuccess, toggleBet } from '../../redux/actions';
import styles from './styles';
import ContentConfig from './types';

const Content = ({ data, getData, bets, pickBet }: ContentConfig) => {
  useEffect(() => { getData(); }, []);

  return (
    <View style={styles.contentWrapper}>
      {data.length ? data.map((pos) => {
        if (!pos.markets.length) return null;
        return (
          <View style={styles.gameWrapper} key={pos.name}>
            <Text style={styles.title}>
              {pos.name}
            </Text>
            {pos.markets.map((elem) => (
              <View key={elem.name}>
                <Text style={styles.objective}>
                  {elem.name}
                </Text>
                <View style={styles.buttonsWrapper}>
                  {elem.selections.map((betObject) => (
                    <TouchableOpacity
                      style={
                                bets.some((bet) => bet.id === betObject.id)
                                  ? styles.betButtonActive
                                  : styles.betButton
                            }
                      key={betObject.name}
                      onPress={() => {
                        pickBet(betObject, pos.id);
                      }}
                    >
                      <Text>{betObject.name}</Text>
                      <Text style={styles.textCenter}>{betObject.price}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </View>
        );
      })
        : <Text style={styles.textCenter}>Loading...</Text>}
    </View>
  );
};

const mapStateToProps = (state: { data: Array<object>; bets: Array<object>; }) => ({
  data: state.data,
  bets: state.bets,
});

const mapDispatchToProps = {
  getData,
  dataReceived: getDataSuccess,
  pickBet: toggleBet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
