import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainApp from '../components/mainapp/MainApp';
import AppNavigator from '../AppNavigator';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Routes = () => {
  const token = useSelector(
    e => e.ComponentPropsManagement.login_data?.data?.jwt_token,
  );

  useEffect(() => {
    const tokenData = AsyncStorage.getItem('TOKEN', e => {
      console.log('GET TOKEN E', token);
    });
    console.log('TOKEN ROUTE', tokenData);
  }, []);

  console.log('', token);
  //   const Stack = createStackNavigator();
  return (
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
    <NavigationContainer>
      {/* {token !== null ? <MainApp /> : <AppNavigator />} */}
      {token ? <MainApp /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
