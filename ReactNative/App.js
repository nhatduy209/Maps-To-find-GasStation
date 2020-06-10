/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import React from 'react';
import { View, StyleSheet } from 'react-native';



export default function App() {
  
  return (
    <View style = {styles.MainView }>
     <MapView style = {{flex : 1}}  Region={{
      latitude: 37.785834,
      longitude: -122.406417,
      latitudeDelta: 0.015,
      longitudeDelta:  0.015,
    }}> 
     {/* <MapView.Marker
            coordinate={{latitude: 109.2755,
            longitude: 22.25}}
            title="Im here"
            description="description"
         /> */}
    </MapView>
    </View>
  );
}


const styles = StyleSheet.create(
  {
    MainView: {
        flex : 1,
        backgroundColor : 'aqua'
    }
  }
);
