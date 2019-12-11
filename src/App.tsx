/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import reducer from './redux/reducers';
import AppContainer from './navigators';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleWare),
);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);


export default App;
