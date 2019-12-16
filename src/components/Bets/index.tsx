import React from 'react';
import {
  View, Image, TouchableOpacity, FlatList
} from 'react-native';
import { connect } from 'react-redux';

import BetItem from '../BetItem';
import { deleteBet } from '../../redux/actions';
import BetsConfig from './types';
import styles from './styles';
import { crossIcon } from '../../constants/icons';

const Bets = ({ bets, data, onDeleteBet, navigation }: BetsConfig) => {
  const { closeDrawer } = navigation;
  return (
    <View style={styles.betsContainer}>
      <TouchableOpacity
        style={styles.crossWrapper}
        onPress={closeDrawer}
      >
        <Image source={crossIcon} />
      </TouchableOpacity>
      <FlatList 
        data={bets}
        renderItem={({ item }) => {
          const chosenGame = data.find((game) => game.id === item.gameId)
          return <BetItem 
            name={chosenGame.name}
            gameId={chosenGame.id}
            betObj={item}
            onDelete={onDeleteBet}
          />
        }}
        keyExtractor={(item: { id: string; gameId: string; price: string;}) => item.id}
      />
    </View>
  );
};

const mapStateToProps = (state: {data: Array<object>, bets: Array<object>}) => ({
  data: state.data,
  bets: state.bets,
});

const mapDispatchToProps = {
  onDeleteBet: deleteBet
};

export default connect(mapStateToProps, mapDispatchToProps)(Bets);
