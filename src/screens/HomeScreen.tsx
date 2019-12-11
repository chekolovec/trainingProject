import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import Header from '../components/Header';
import Content from '../components/Content';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
});

const HomeScreen = (props: any) => {
  const { navigation } = props;
  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Header navigation={navigation} />
        <Content />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
