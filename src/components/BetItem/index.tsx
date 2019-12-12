import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';

import styles from './styles';
import betItemConfig from './types';

const betItem = (props: betItemConfig) => {
  const { name, handleDelete, gameId } = props;
  const { betObj } = props;
  const { price } = betObj;
  return (
    <View style={styles.betItem}>
      <Text style={styles.title}>
        {name}
      </Text>
      <Text style={styles.coefText}>
        {price}
      </Text>
      <TouchableOpacity
        onPress={() => {
          handleDelete(betObj, gameId);
        }}
        style={styles.deleteButton}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default betItem;
