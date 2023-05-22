import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SubmitClaims from '../submit claims/SubmitClaims';
import ClaimsStatus from '../claims status/ClaimsStatus';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllBrands from '../all brands/AllBrands';
import Electronics from '../electronics/Electronics';

const Brands = () => {
  // const [tabs] = useState(data);
  const [value, setValue] = useState(0);
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          // tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            borderBottomColor: '#981956',
            borderBottomWidth: 3,
          },
        }}>
        <Tab.Screen
          name="ALL"
          component={AllBrands}
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="ELECTRONICS"
          component={Electronics}
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
          }}
        />
        {/* <Tab.Screen name="INDUSTRIAL" component={} /> */}
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
export default Brands;
