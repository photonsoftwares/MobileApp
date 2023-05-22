import {SafeAreaView} from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider, useSelector} from 'react-redux';
// import {store} from './src/redux/store';
import {store} from './src/redux/store';
import Routes from './src/navigation/Routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <Routes />
        </SafeAreaView>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
