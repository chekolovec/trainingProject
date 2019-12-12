import React from 'react';
import {
  View, TouchableOpacity, Image,
} from 'react-native';

import styles from './styles';
import HeaderConfig from './types';
import { homeIcon } from '../../constants/icons';

export default (props: HeaderConfig) => (
  <View style={styles.menuWrapper}>
    <TouchableOpacity
      style={styles.iconWrapper}
      onPress={() => props.navigation.openDrawer()}
    >
      <Image
        source={homeIcon}
      />
    </TouchableOpacity>
  </View>
);
