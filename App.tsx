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
import React, { useMemo, useState } from 'react';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import reducer from './src/redux/reducers';
import AppContainer from './src/navigators';
import rootSaga from './src/redux/sagas';
import { ThemeContext } from './src/context'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

const App = () => {
  const [isThemeBlack, setIsThemeBlack] = useState(false)  
  const themeValue = useMemo(() => ({isThemeBlack, setIsThemeBlack}), [isThemeBlack, setIsThemeBlack])
  return (
  <Provider store={store}>
    <ThemeContext.Provider value={themeValue}>
      <AppContainer />
    </ThemeContext.Provider>
  </Provider>
 ) 
}

export default App;
