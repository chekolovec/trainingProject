import React, { useContext } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import Header from '../../components/Header';
import Content from '../../components/Content';
import HomeScreenConfig from './types';
import styles from './styles';
import {ThemeContext} from '../../context'

const HomeScreen = ({ navigation }: HomeScreenConfig) => {
  const { isThemeBlack } = useContext(ThemeContext)
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={
        isThemeBlack ?
        styles.scrollViewBlack :
        styles.scrollView
      }
    >
      <Header navigation={navigation} />
      <Content />
    </ScrollView>
  );
};

export default HomeScreen;
