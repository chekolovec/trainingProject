import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';

import styles from './styles';
import betItemConfig from './types';

const betItem = ({ name, onDelete, gameId, betObj}: betItemConfig) => {
  const { price } = betObj;
  const handleDelete = () => onDelete(betObj, gameId)
  return (
    <View style={styles.betItem}>
      <Text style={styles.title}>
        {name}
      </Text>
      <Text style={styles.coefText}>
        {price}
      </Text>
      <TouchableOpacity
        onPress={handleDelete}
        style={styles.deleteButton}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default betItem;
