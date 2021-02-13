import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {
  NavigationContainer,
  // DefaultTheme,
  // DarkTheme,
} from '@react-navigation/native';

import MainStackScreen from './routes/MainStackScreen';
import Login from './screens/Login';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <MainStackScreen />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
