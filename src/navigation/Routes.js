import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainApp from '../components/mainapp/MainApp';
import AppNavigator from '../AppNavigator';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Routes = () => {
  // const [AccessToken, setAccesToken] = useState(null);
  const token = useSelector(
    e => e.ComponentPropsManagement.login_data?.data?.jwt_token,
  );

  // const saveData = async () => {
  //   if (token && token.length > 5) {
  //     const tokenData = token;
  //     const saveToken = await AsyncStorage.setItem('TOKEN', tokenData);
  //     console.log("SAVE TOKEN", saveToken);
  //   }
  // };

  // useEffect(() => {
  //   saveData();
  // }, [token]);

  // console.log('TOKEN ROUTE', AccessToken);

  // const getToken = async () => {
  //   try {
  //     const accesData = AsyncStorage.getItem('TOKEN');
  //     console.log('ACCESS DATA', accesData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getToken();
  // }, []);

  // console.log('Token', token);
  return (
    <NavigationContainer>
      {/* {token !== null ? <MainApp /> : <AppNavigator />} */}
      {token ? <MainApp /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
