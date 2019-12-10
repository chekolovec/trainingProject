import React, { useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from '../components/Header'
import Content from '../components/Content'

export default (props: any) => {  
    return (
      <View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header navigation={props.navigation}/>
          <Content />
        </ScrollView>
      </View>
    );
  };

  
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
});  

