import React from 'react';
import {
  StyleSheet, View, Image, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BetItem from './BetItem';
import * as actions from '../redux/actions';

const styles = StyleSheet.create({
  crossWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  betsContainer: {
    padding: 20,
  },
});

const src = require('../assets/img/cross.png');

const Bets = (props) => {
  const {
    bets, data, deleteBet, navigation,
  } = props;
  const { closeDrawer } = navigation;
  return (
    <View style={styles.betsContainer}>
      <TouchableOpacity
        style={styles.crossWrapper}
        onPress={() => closeDrawer()}
      >
        <Image source={src} />
      </TouchableOpacity>
      {bets.map((betObj) => {
        const chosenGame = data.find((game) => game.id === betObj.gameId);
        return chosenGame && (
        <BetItem
          name={chosenGame.name}
          gameId={chosenGame.Id}
          key={betObj.id}
          betObj={betObj}
          handleDelete={deleteBet}
        />
        );
      })}
    </View>
  );
};

Bets.propTypes = {
  navigation: PropTypes.object,
  bets: PropTypes.array,
  data: PropTypes.array,
  deleteBet: PropTypes.func,
};

Bets.defaultProps = {
  navigation: {},
  bets: [],
  data: [],
  deleteBet: () => {},
};

const mapStateToProps = (state) => ({
  data: state.data,
  bets: state.bets,
});

const mapDispatchToProps = (dispatch) => ({
  deleteBet: (bet, gameId) => dispatch(actions.toggleBet(bet, gameId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bets);
