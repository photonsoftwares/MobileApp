import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import shoppingImg from '../../assets/image32.png';
import card from '../../assets/card.jpg';
import Rectangle from '../../assets/Rectangle.png';
import Right from '../../assets/Right.png';
import Left from '../../assets/Left.png';
import loyaltyCard from '../../assets/loyaltyCard.jpg';

import {
  handleLoginRequest,
  handleUserTransactionRequest,
  // handleUserUpdateRequest,
  // handleRegisterRequest,
  // handleUserTransactionRequest,
} from '../../redux/actions-reducers/ComponentProps/ComponentPropsManagement';
import {useDispatch, useSelector} from 'react-redux';
const Home = () => {
  const [userdata, setUserData] = useState(login_data);
  const [data, setData] = useState(user_transaction);
  const login_data = useSelector(e => e.ComponentPropsManagement.login_data);
  const user_transaction = useSelector(
    e => e.ComponentPropsManagement.user_transaction,
  );
  console.log('UT HOME', user_transaction);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleUserTransactionRequest({phone_number: '9874873434'}));
  }, []);
  // useEffect(() => {
  //   dispatch(handleUserTransactionRequest({phone_number: '9874873434'}));
  // }, []);
  console.log('HOME LOGINDATA', login_data);

  useEffect(() => {
    if (login_data && login_data.data) {
      setUserData(login_data.data.user);
    }
    // }, [userData, password]);
  }, [userdata]);
  useEffect(() => {
    if (user_transaction && user_transaction.length) {
      setData(user_transaction);
    }
  }, [user_transaction, data]);

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
  // const image = {uri: '../../assets/Rectangle.png'};

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
        <ImageBackground
          style={{width: '100%', height: 220, borderRadius: 12}}
          source={Rectangle}
          resizeMode="cover">
          <View
            style={{
              flex: 1,
              height: '35%',
              width: '20%',
              position: 'absolute',
              left: 20,
              top: 20,
            }}>
            <Image
              source={Left}
              style={{flex: 1, height: '100%', width: '100%'}}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              left: 20,
              bottom: 30,
            }}>
            <Text style={{fontSize: 12, color: '#fff'}}>Points</Text>
            <Text style={{fontSize: 25, color: '#fff', fontWeight: 'bold'}}>
              {Number(
                user_transaction[0]?.issued_amount +
                  user_transaction[1]?.issued_amount,
              )}
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              right: 20,
              top: 35,
            }}>
            <Text style={{fontSize: 17, color: '#fff'}}>
              42240505239874873892BAH
            </Text>
          </View>
          <View
            style={{
              // flex: 1,
              // height: '30%',
              // width: '20%',
              position: 'absolute',
              right: 20,
              bottom: 30,
            }}>
            <Text style={{fontSize: 12, color: '#fff'}}>BAH</Text>
            <Text style={{fontSize: 25, color: '#fff', fontWeight: 'bold'}}>
              {user_transaction[1]?.redeemed_amount}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: '100%',
              width: '50%',
              position: 'absolute',
              right: 0,
            }}>
            <Image
              source={Right}
              style={{flex: 1, height: '100%', width: '100%'}}
            />
          </View>
        </ImageBackground>
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
