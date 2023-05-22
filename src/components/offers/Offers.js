import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SubmitClaims from '../submit claims/SubmitClaims';
import ClaimsStatus from '../claims status/ClaimsStatus';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import All from '../offers screen/All';

import Commercial from '../offers screen/Commercial';
import {ScrollView} from 'react-native-gesture-handler';
import Automation from '../offers screen/Automation';
import Electrical from '../offers screen/Electrical';

const Offers = () => {
  // const [tabs] = useState(data);
  const [value, setValue] = useState(0);
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            borderBottomColor: '#981956',
            borderBottomWidth: 3,
          },
        }}>
        <Tab.Screen
          name="ALL"
          component={All}
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="COMMERCIAL"
          component={Commercial}
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="AUTOMATION"
          component={Automation}
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="ELECTRICAL"
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
          }}
          component={Electrical}
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
export default Offers;
