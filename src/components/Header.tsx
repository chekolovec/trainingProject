import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Image,
} from 'react-native';

const styles = StyleSheet.create({
  menuWrapper: {
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
    padding: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  iconWrapper: {
    width: 43,
  },
});

const src = require('../assets/img/icon.png');

export default (props: any) => (
  <View style={styles.menuWrapper}>
    <TouchableOpacity
      style={styles.iconWrapper}
      onPress={() => props.navigation.openDrawer()}
    >
      <Image
        source={src}
      />
    </TouchableOpacity>
  </View>
);
