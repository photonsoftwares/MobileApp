import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import About from '../About/About';
import Home from '../Home/Home';
import Offers from '../offers/Offers';
import Brands from '../brands/Brands';
import Account from '../account/Account';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../profile/Profile';
import ReceiptAndTransaction from '../receipt & transaction/ReceiptAndTransaction';
import ClaimLoyality from '../claim your loyality/ClaimLoyality';
import LoyalityCalculator from '../loyality calculator/LoyalityCalculator';
import ChangePassword from '../change password/ChangePassword';

// import {createStackNavigator} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import AppAccount from '../account/app account/AppAccount';

const MainApp = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const SettingsStack = createNativeStackNavigator();
  // function SettingsStackScreen() {
  //   return (
  //     <SettingsStack.Navigator>
  //       <SettingsStack.Screen name="Account" component={Account} />
  //       <SettingsStack.Screen name="PROFILE" component={Profile} />
  //       <SettingsStack.Screen
  //         name="RECEIPT_AND_TRANSACTION"
  //         component={ReceiptAndTransaction}
  //       />
  //       <SettingsStack.Screen name="CLAIM_LOYALITY" component={ClaimLoyality} />
  //       <SettingsStack.Screen
  //         name="LOYALITY_CALCULATOR"
  //         component={LoyalityCalculator}
  //       />
  //       <SettingsStack.Screen
  //         name="CHANGE_PASSWORD"
  //         component={ChangePassword}
  //       />
  //       {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
  //     </SettingsStack.Navigator>
  //   );
  // }

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: '#981956'},
        // tabBarButton: {color: 'white'},
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 25 : 20;
            color = focused ? '#fff' : '#898989';
          } else if (route.name === 'Offers') {
            iconName = 'tag';
            size = focused ? 25 : 20;
            color = focused ? '#fff' : '#898989';
          } else if (route.name === 'Brands') {
            iconName = 'list';
            size = focused ? 25 : 20;
            color = focused ? '#fff' : '#898989';
          } else if (route.name === 'Accounts') {
            iconName = 'user-circle';
            size = focused ? 25 : 20;
            color = focused ? '#fff' : '#898989';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inActiveTintColor: '#898989',
        labelStyle: {fontSize: 12},
      }}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Brands"
        component={Brands}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Accounts"
        component={Account}
        options={{headerShown: false}}
      />
    </Tab.Navigator>

    // <>
    //   <View>
    //     <Text>Hello world</Text>
    //   </View>
    // </>
  );
};
const styles = StyleSheet.create({});
export default MainApp;

// /////////////////
// import * as React from 'react';
// import {Button, Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import About from '../About/About';
// import Home from '../Home/Home';
// import Offers from '../offers/Offers';
// import Brands from '../brands/Brands';
// import Account from '../account/Account';
// function DetailsScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Details!</Text>
//     </View>
//   );
// }

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function SettingsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Settings screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// const HomeStack = createNativeStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={Home} />
//     </HomeStack.Navigator>
//   );
// }

// const SettingsStack = createNativeStackNavigator();

// function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//       <SettingsStack.Screen name="Details" component={DetailsScreen} />
//     </SettingsStack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarStyle: {backgroundColor: '#981956'},
//       })}>
//       <Tab.Screen name="Home" component={HomeStackScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//       {/* <Tab.Screen name="HOME" component={Home} options={{headerShown: false}} />
//       <Tab.Screen
//         name="OFFERS"
//         component={Offers}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="BRANDS"
//         component={Brands}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="ACCOUNT"
//         component={Account}
//         options={{headerShown: false}}
//       /> */}
//     </Tab.Navigator>
//   );
// };
// export default MainApp;
