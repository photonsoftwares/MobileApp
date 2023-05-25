import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SubmitClaims from '../submit claims/SubmitClaims';
import ClaimsStatus from '../claims status/ClaimsStatus';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const ClaimLoyality = () => {
  // const [tabs] = useState(data);
  const [value, setValue] = useState(0);
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
          name="Submit claims"
          component={SubmitClaims}
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="Claims status"
          component={ClaimsStatus}
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
export default ClaimLoyality;
