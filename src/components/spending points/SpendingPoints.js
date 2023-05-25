import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SpendingPoints = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <View>
          <Text
            style={{
              fontSize: 16,
              marginTop: 20,
              width: '80%',
              color: '#252422',
              margin: 'auto',
            }}>
            Check how much you can save with loyalty points
          </Text>
        </View>
        <View style={{marginTop: 40, marginBottom: 40}}>
          <Text style={{fontSize: 30, color: '#252422'}}>77 Points</Text>
        </View>
        <View>
          <Text style={{fontSize: 50, fontWeight: 'bold', color: '#981956'}}>
            3.85 BAH
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SpendingPoints;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '90%',
    marginLeft: 10,
    marginRight: 10,
  },
});
