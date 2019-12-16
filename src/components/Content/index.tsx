import React, { useEffect, useMemo } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import { getData, addBet, deleteBet, getDataSuccess } from '../../redux/actions';
import styles from './styles';
import ContentConfig from './types';
import Selection from '../Selection'

const Content = ({ data, getData, bets, onAddBet, onDeleteBet }: ContentConfig) => {
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
  );
};

const mapStateToProps = (state: { data: Array<object>; bets: Array<object>; }) => ({
  data: state.data,
  bets: state.bets,
});

const mapDispatchToProps = {
  getData,
  onDataReceived: getDataSuccess,
  onAddBet: addBet,
  onDeleteBet: deleteBet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
