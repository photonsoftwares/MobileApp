import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const SubmitClaims = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, textAlign: 'center', color: '#252422'}}>
          Claim your Loyality Points from purchase made without your Loyality
          points
        </Text>
      </View>
      <View
        style={{
          marginBottom: 40,
          marginTop: 40,
          width: '100%',
          textAlign: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
            color: '#252422',
          }}>
          How to claim
        </Text>
      </View>
      <View
        style={{
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'flex-start',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
        }}>
        <TextInput
          placeholder="Enter invoice date"
          placeholderTextColor={'#252422'}
          style={{
            fontSize: 20,
            fontWeight: '400',
            marginBottom: 5,
            marginTop: 20,
          }}></TextInput>
      </View>
      <View
        style={{
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'flex-start',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
        }}>
        <TextInput
          placeholder="Enter invoice number"
          placeholderTextColor={'#252422'}
          style={{
            fontSize: 20,
            fontWeight: '400',
            marginBottom: 5,
            marginTop: 40,
          }}></TextInput>
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: '#981956',
          marginTop: 40,
          marginBottom: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
            marginTop: 20,
            marginBottom: 20,
          }}>
          CLAIM YOUR LOYALTY POINTS
        </Text>
      </TouchableOpacity>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, color: '#252422'}}>
          By clicking, I agree all
        </Text>
        <Text style={{fontSize: 18, color: '#981956'}}>
          {' '}
          Terms and Conditions.
        </Text>
      </View>
    </View>
  );
};

export default SubmitClaims;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 10,
    marginRight: 10,
  },
});
