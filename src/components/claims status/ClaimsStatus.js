import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import bgImage from '../../assets/statusbg.png';
const ClaimsStatus = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={{justifyContent: 'center'}}
      />
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 20,
            fontWeight: '600',
            color: '#252422',
          }}>
          You haven't made a claim yet.
        </Text>
        <Text style={{fontWeight: '400', fontSize: 16, color: '#252422'}}>
          Submit your invoice to claim your Loyality points
        </Text>
      </View>
    </View>
  );
};

export default ClaimsStatus;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
});
