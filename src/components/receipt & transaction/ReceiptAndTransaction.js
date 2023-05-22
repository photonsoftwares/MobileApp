import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {handleUserTransactionRequest} from '../../redux/actions-reducers/ComponentProps/ComponentPropsManagement';
import axios from 'axios';
// import {handleUserTransactionRequest} from '../../redux/actions-reducers/ComponentProps/ComponentPropsManagement';

const ReceiptAndTransaction = () => {
  const [data, setData] = useState(user_transaction);
  const user_transaction = useSelector(
    e => e.ComponentPropsManagement.user_transaction,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleUserTransactionRequest({phone_number: '9874873434'}));
  }, []);

  console.log('UT', user_transaction);

  useEffect(() => {
    if (user_transaction && user_transaction.length) {
      setData(user_transaction);
    }
  }, [user_transaction, data]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{width: '100%'}}>
          <Text style={{fontWeight: '600', fontSize: 20, color: '#252422'}}>
            Recept & Transaction
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 20,
              justifyContent: 'flex-start',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
            }}>
            <Text style={{color: '#252422'}}>Date range</Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                marginBottom: 5,
                marginTop: 20,
                color: '#252422',
              }}>
              Last 6 months
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 20,
              justifyContent: 'flex-start',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
            }}>
            <Text style={{color: '#252422'}}>Transaction type</Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                marginBottom: 5,
                marginTop: 20,
                color: '#252422',
              }}>
              All brands
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          borderTopColor: '#981956',
          borderTopWidth: 0.2,
          marginTop: 20,
          borderBottomColor: '#981956',
          paddingTop: 20,
          backgroundColor: '#f7f7f7',
          paddingBottom: 20,
          borderBottomWidth: 0.2,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={{fontSize: 18, color: '#252422'}}>
                Total issued points
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  marginTop: 10,
                  fontSize: 35,
                  color: '#252422',
                }}>
                {Number(
                  user_transaction[0]?.issued_amount +
                    user_transaction[1]?.issued_amount,
                )}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={{fontSize: 18, color: '#252422'}}>Value BAH</Text>
              <Text
                style={{
                  marginBottom: 10,
                  marginTop: 10,
                  fontSize: 35,
                  color: '#252422',
                }}>
                {user_transaction[1]?.redeemed_amount}
              </Text>
            </View>
          </View>
          <View>
            <Text style={{color: '#252422'}}>
              You saved 10.5 BAH by spending 76 loyality points
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          borderBottomColor: '#981956',
          paddingBottom: 20,
          borderBottomWidth: 1.5,
        }}>
        <View>
          <Text style={{fontSize: 20, fontWeight: '600', color: '#252422'}}>
            Brands
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              marginRight: 20,
              fontSize: 20,
              fontWeight: '600',
              color: '#252422',
            }}>
            Issued
          </Text>
          <Text style={{fontSize: 20, fontWeight: '600', color: '#252422'}}>
            Redeemed
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          borderBottomColor: '#e5e3df',
          paddingBottom: 20,
          borderBottomWidth: 2,
        }}>
        <View>
          <View>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#252422'}}>
              {user_transaction[0]?.redeemed_concept}
            </Text>
            <Text style={{fontSize: 12, marginTop: 20, color: '#252422'}}>
              BAH 250.00 - 01/01/2030
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{marginRight: 40}}>
            <Text style={{fontSize: 20, fontWeight: '400', color: '#252422'}}>
              {' '}
              {user_transaction[0]?.issued_amount}
            </Text>
          </View>
          <View style={{marginRight: 40}}>
            <Text style={{fontSize: 20, fontWeight: '400', color: '#252422'}}>
              {' '}
              {user_transaction[0]?.redeemed_amount}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          borderBottomColor: '#e5e3df',
          paddingBottom: 20,
          borderBottomWidth: 2,
        }}>
        <View>
          <View>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#252422'}}>
              {' '}
              {user_transaction[1]?.redeemed_concept}
            </Text>
            <Text style={{fontSize: 12, marginTop: 20, color: '#252422'}}>
              BAH 250.00 - 01/01/2030
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            // width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{marginRight: 40}}>
            <Text style={{fontSize: 20, fontWeight: '400', color: '#252422'}}>
              {' '}
              {user_transaction[1]?.issued_amount}
            </Text>
          </View>
          <View style={{marginRight: 40}}>
            <Text style={{fontSize: 20, fontWeight: '400', color: '#252422'}}>
              {' '}
              {user_transaction[1]?.redeemed_amount}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // width: '80%',
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'column',
  },
});
export default ReceiptAndTransaction;
