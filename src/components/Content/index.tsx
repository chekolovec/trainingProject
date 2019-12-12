import React, { useEffect } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import styles from './styles';
import ContentConfig from './types';

const Content = (props: ContentConfig) => {
  const { data } = props;
  useEffect(() => { props.getData(); }, []);

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
                                props.bets.some((bet) => bet.id === betObject.id)
                                  ? styles.betButtonActive
                                  : styles.betButton
                            }
                      key={betObject.name}
                      onPress={() => {
                        props.pickBet(betObject, pos.id);
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

const mapStateToProps = (state: { data: any; bets: any; }) => ({
  data: state.data,
  bets: state.bets,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(actions.getData()),
  dataReceived: (data) => dispatch(actions.getDataSuccess(data)),
  pickBet: (betObj, gameId) => dispatch(actions.toggleBet(betObj, gameId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
