import React, { useEffect } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';

const styles = StyleSheet.create({
  contentWrapper: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  gameWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    borderWidth: 1,
    marginTop: 20,
  },
  objective: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  textCenter: {
    textAlign: 'center',
  },
  betButton: {
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: 'grey',
  },
  betButtonActive: {
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: 'grey',
    backgroundColor: 'green',
  },
});

const Content = (props: any) => {
  const { data } = props;
  useEffect(() => {
    fetch('http://www.mocky.io/v2/59f08692310000b4130e9f71')
      .then((res) => res.json())
      .then((jsonData) => {
        props.dataReceived(jsonData);
      })
      .catch((err) => new Error(err));
  }, []);

  return (
    <View style={styles.contentWrapper}>
      {data ? data.map((pos) => {
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
      }) : null}
    </View>
  );
};

const mapStateToProps = (state: { data: any; bets: any; }) => ({
  data: state.data,
  bets: state.bets,
});

const mapDispatchToProps = (dispatch) => ({
  dataReceived: (data) => dispatch(actions.getDataSuccess(data)),
  pickBet: (betObj, gameId) => dispatch(actions.toggleBet(betObj, gameId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
