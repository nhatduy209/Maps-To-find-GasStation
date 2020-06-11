import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import gasimage from '../Image/gas.png';
export default function CustomMapMarker() {
  return (
    <View style={styles.GasStation}>
      <Image style={styles.GasStation} source={gasimage} />
    </View>
  );
}

const styles = StyleSheet.create({
  GasStation: {
    borderRadius: 25,
    height: 30,
    width: 30,
  },
});
