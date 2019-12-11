import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  betItem: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
  },
  title: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  deleteButton: {
    width: 100,
    backgroundColor: 'grey',
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 5,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
  coefText: {
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 10,
  },
});

const betItem = (props) => {
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

betItem.propTypes = {
  name: PropTypes.string,
  handleDelete: PropTypes.func,
  gameId: PropTypes.string,
  betObj: PropTypes.object,
};

betItem.defaultProps = {
  name: undefined,
  handleDelete: () => {},
  gameId: undefined,
  betObj: {},
};

export default betItem;
