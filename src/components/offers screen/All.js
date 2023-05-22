import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

import summersale from '../../assets/summersale.jpg';
import flashsale from '../../assets/flashsale.jpg';
import {ScrollView} from 'react-native-gesture-handler';
const All = () => {
  return (
    <ScrollView style={{marginBottom: 20, backgroundColor: '#fff'}}>
      <View style={{height: 200, width: '100%', marginTop: 20}}>
        <Image source={summersale} style={{height: '100%', width: '100%'}} />
      </View>
      <View style={{height: 200, width: '100%', marginTop: 20}}>
        <Image source={flashsale} style={{height: '100%', width: '100%'}} />
      </View>
      <View style={{height: 200, width: '100%', marginTop: 20}}>
        <Image source={summersale} style={{height: '100%', width: '100%'}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default All;
