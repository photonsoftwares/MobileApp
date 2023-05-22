import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  });
  return (
    <View style={style.spalsh_container}>
      <Text style={{color: '#4e4e46', fontSize: 50, fontWeight: '600'}}>
        Loyality App
      </Text>
    </View>
  );
};
const style = StyleSheet.create({
  spalsh_container: {
    flex: 1,
    // display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFE0',
    justifyContent: 'center',
  },
});

export default Splash;
