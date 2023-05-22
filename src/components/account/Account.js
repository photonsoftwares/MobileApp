import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SwitchToggle from 'react-native-switch-toggle';
import {useSelector} from 'react-redux';
import {handleLoginRequest} from '../../redux/actions-reducers/ComponentProps/ComponentPropsManagement';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppAccount from './app account/AppAccount';
import Profile from '../profile/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import ReceiptAndTransaction from '../receipt & transaction/ReceiptAndTransaction';
import ClaimLoyality from '../claim your loyality/ClaimLoyality';
import LoyalityCalculator from '../loyality calculator/LoyalityCalculator';
import ChangePassword from '../change password/ChangePassword';

const Account = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      options={{
        tabBarStyle: {display: 'none'},
      }}>
      <Stack.Screen
        name="AppAccount"
        component={AppAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Recept and transaction"
        component={ReceiptAndTransaction}
      />
      <Stack.Screen name="Claim your Loyality" component={ClaimLoyality} />
      <Stack.Screen name="Loyalty Calculator" component={LoyalityCalculator} />
      <Stack.Screen name="Change Password" component={ChangePassword} />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create();
export default Account;
