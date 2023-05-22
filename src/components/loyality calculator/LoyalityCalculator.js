import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Scro,
} from 'react-native';
import React, {useState} from 'react';
import SubmitClaims from '../submit claims/SubmitClaims';
import ClaimsStatus from '../claims status/ClaimsStatus';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EarningPoints from '../earning points/EarningPoints';
import SpendingPoints from '../spending points/SpendingPoints';

const LoyalityCalculator = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            borderBottomColor: '#981956',
            borderBottomWidth: 3,
          },
        }}>
        <Tab.Screen
          name="Earning points"
          component={EarningPoints}
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="Spending points"
          component={SpendingPoints}
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // marginLeft: 20,
    // marginRight: 20,
  },
});
export default LoyalityCalculator;
