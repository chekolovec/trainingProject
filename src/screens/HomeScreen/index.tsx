import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import Header from '../../components/Header';
import Content from '../../components/Content';
import HomeScreenConfig from './types';
import styles from './styles';

const HomeScreen = ({ navigation }: HomeScreenConfig) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <Header navigation={navigation} />
      <Content />
    </ScrollView>
  );
};

export default HomeScreen;
