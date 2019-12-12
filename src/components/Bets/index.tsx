import React from 'react';
import {
  View, Image, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import BetItem from '../BetItem';
import * as actions from '../../redux/actions';
import BetsConfig from './types';
import styles from './styles';
import { crossIcon } from '../../constants/icons';

const Bets = (props: BetsConfig) => {
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
        <Image source={crossIcon} />
      </TouchableOpacity>
      {bets.map((betObj) => {
        const chosenGame = data.find((game) => game.id === betObj.gameId);
        return chosenGame && (
        <BetItem
          name={chosenGame.name}
          gameId={chosenGame.id}
          key={betObj.id}
          betObj={betObj}
          handleDelete={deleteBet}
        />
        );
      })}
    </View>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  bets: state.bets,
});

const mapDispatchToProps = (dispatch) => ({
  deleteBet: (bet, gameId) => dispatch(actions.toggleBet(bet, gameId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bets);
