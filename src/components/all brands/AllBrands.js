import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import renault from '../../assets/renault.jpeg';
import nissan from '../../assets/nissan.jpeg';
import lincoln from '../../assets/lincoln.jpeg';
import ford from '../../assets/ford.jpeg';
import {FlatList} from 'react-native-gesture-handler';
const AllBrands = () => {
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
    <View>
      <View style={{marginTop: 20, marginBottom: 20}}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>
          Brands you've experienced
        </Text>
      </View>
      <FlatList
        data={brands}
        // numColumns={3}
        renderItem={({item}) => (
          <View
            style={{
              height: 100,
              width: '100%',
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
    </View>
  );
};

export default AllBrands;

const styles = StyleSheet.create({});
