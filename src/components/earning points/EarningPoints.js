import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import renault from '../../assets/renault.jpeg';
import nissan from '../../assets/nissan.jpeg';
import lincoln from '../../assets/lincoln.jpeg';
import ford from '../../assets/ford.jpeg';
const EarningPoints = () => {
  const brands = [
    {
      id: 1,
      img: renault,
    },
    {
      id: 2,
      img: nissan,
    },
    {
      id: 3,
      img: lincoln,
    },
    {
      id: 4,
      img: ford,
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingTop: 20,
          marginTop: 20,
          paddingBottom: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, color: '#252422'}}>
          Points you can earn at
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#898989',
          borderBottomWidth: 1,
          borderTopColor: '#898989',
          borderTopWidth: 1,
          paddingTop: 20,
          marginTop: 20,
          paddingBottom: 20,
          justifyContent: 'space-between',
        }}>
        <TextInput
          placeholder="Select brand"
          style={{fontSize: 18}}
          placeholderTextColor={'#252422'}
        />
        <Feather name="search" size={22} />
      </View>
      <FlatList
        data={brands}
        numColumns={3}
        renderItem={({item}) => (
          <View
            style={{
              height: 100,
              width: 100,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Image
              source={item.img}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
          </View>
        )}
      />
    </ScrollView>
  );
};

export default EarningPoints;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '100%',
    marginLeft: 10,
    marginRight: 10,
  },
});
