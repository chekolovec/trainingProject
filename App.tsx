/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'


import Header from './components/Header'
import reducer from './store/reducers'
import fetchData from './sagas'
import Content from './components/Content';
import Bets from './components/Bets'
import { getDataSuccess } from './store/actions'

const sagaMiddleWare = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleWare)
)
// sagaMiddleWare.run(fetchData)

const Home = (props: any) => {
  useEffect(() => {
    fetch('http://www.mocky.io/v2/59f08692310000b4130e9f71')
    .then(res => res.json())
    .then(data => {
      store.dispatch(getDataSuccess(data))
    })
  }, [])

  console.log(store.getState(), 'home')
  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header navigation={props.navigation}/>
        <Content data={store.getState().data}/>
      </ScrollView>
    </View>
  );
};

const navigator = createDrawerNavigator(
  {
    Home
  },
  {
    contentComponent: Bets,
    drawerPosition: "right"

  }
)

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default createAppContainer(navigator);
