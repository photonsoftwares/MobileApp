import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import About from './components/About/About';
import Home from './components/Home/Home';
import Splash from './components/Splash/Splash';
import {ListAccordionGroupContext} from 'react-native-paper/lib/typescript/src/components/List/ListAccordionGroup';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MainApp from './components/mainapp/MainApp';
import Profile from './components/profile/Profile';
import ReceiptAndTransaction from './components/receipt & transaction/ReceiptAndTransaction';
import ClaimLoyality from './components/claim your loyality/ClaimLoyality';
import LoyalityCalculator from './components/loyality calculator/LoyalityCalculator';
import ChangePassword from './components/change password/ChangePassword';
import AppAccount from './components/account/app account/AppAccount';
import Account from './components/account/Account';

const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
