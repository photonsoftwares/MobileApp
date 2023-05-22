import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import shoppingImg from '../../assets/shopping.jpg';
import card from '../../assets/card.jpg';
import loyaltyCard from '../../assets/loyaltyCard.jpg';

import {
  handleLoginRequest,
  // handleUserUpdateRequest,
  // handleRegisterRequest,
  // handleUserTransactionRequest,
} from '../../redux/actions-reducers/ComponentProps/ComponentPropsManagement';
import {useDispatch, useSelector} from 'react-redux';
const Home = () => {
  const [userdata, setUserData] = useState(login_data);
  const login_data = useSelector(e => e.ComponentPropsManagement.login_data);

  useEffect(() => {
    if (login_data && login_data.data) {
      setUserData(login_data.data.user);
    }
    // }, [userData, password]);
  }, [userdata]);

  // useEffect(() => {
  //   const tokenData = AsyncStorage.getItem('TOKEN');
  //   console.log('TOKEN ROUTE', tokenData);
  // }, []);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const email = AsyncStorage.getItem('EMAIL');
    console.log('IN HOME EMAIL', JSON.parse(email));
  };

  const offers = [
    {
      id: 1,
      image: shoppingImg,
      discount: '25%-70% OFF',
      daysLeft: '17 days left',
    },
    {
      id: 2,
      image: shoppingImg,
      discount: '25%-70% OFF',
      daysLeft: '17 days left',
    },
    {
      id: 3,
      image: shoppingImg,
      discount: '25%-70% OFF',
      daysLeft: '17 days left',
    },
    {
      id: 4,
      image: shoppingImg,
      discount: '25%-70% OFF',
      daysLeft: '17 days left',
    },
    {
      id: 5,
      image: shoppingImg,
      discount: '25%-70% OFF',
      daysLeft: '17 days left',
    },
  ];
  const partnerOffer = [
    {
      id: 1,
      image: card,
      discount: '25%-70% OFF',
      daysLeft: '17 days left',
    },
    {
      id: 2,
      image: card,
      discount: '25%-70% OFF',
      daysLeft: '17 days left',
    },
    {
      id: 3,
      image: card,
      discount: '25%-70% OFF',
      daysLeft: '17 days left',
    },
    {
      id: 4,
      image: card,
      discount: '25%-70% OFF',
      daysLeft: '17 days left',
    },
    {
      id: 5,
      image: shoppingImg,
      discount: '25%-70% OFF',
      daysLeft: '17 days left',
    },
  ];

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View
        style={{
          backgroundColor: '#f7f7f7',
          width: '100%',
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 10,
          // paddingRight: 10,
          // height: '100%',
        }}>
        <View>
          <Text style={styles.logo}>Hi, {userdata?.full_name} .. !</Text>
        </View>
        <View>
          <Text style={styles.account_heading}>Your Account details</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            // paddingTop: 20,
          }}></View>
        <View style={styles.welcomebox}>
          <Image
            source={loyaltyCard}
            style={{height: '100%', width: '100%', borderRadius: 10}}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View>
              <Ionicons
                name="ios-gift-outline"
                color="#981956"
                style={{
                  fontSize: 30,
                  fontWeight: '400',
                }}
              />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderWidth: 1.5,
                borderColor: '#252422',
                marginTop: 10,
                width: '80%',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  // paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                  fontSize: 14,
                  marginTop: 10,
                  fontWeight: '400',
                  color: '#252422',
                }}>
                Gift Cards
              </Text>
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View>
              <AntDesign
                name="staro"
                color="#981956"
                style={{
                  fontSize: 30,
                  fontWeight: '400',
                }}
              />
            </View>
            <View
              style={{
                borderRadius: 8,
                borderWidth: 1.5,
                borderColor: '#252422',
                marginTop: 10,
                alignItems: 'center',
                // width: '80%',
              }}>
              <Text
                style={{
                  // paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 17,
                  paddingRight: 17,
                  fontSize: 14,
                  marginTop: 10,
                  fontWeight: '400',
                  color: '#252422',
                }}>
                Points Calculator
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          padding: 20,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 16,
            marginBottom: 30,
            color: '#252422',
          }}>
          Offers for you
        </Text>
        <FlatList
          data={offers}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{height: 200, width: 500}}>
              <Image
                source={item.image}
                style={{height: '100%', width: '100%'}}
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  account_heading: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#252422',
  },
  welcomebox: {
    height: 200,
    marginTop: 40,
    width: '100%',
    borderRadius: 10,
  },
});
export default Home;
