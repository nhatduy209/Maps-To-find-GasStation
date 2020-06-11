/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import CustomMapMarker from './Image/CustomMarker';
const Stack = createStackNavigator();


const location =  [
    {
      title : "Cây Xăng Dân Chủ",
      latitude: 10.84986409,
      longitude: 106.76737852,
    },
    {
      title : "Cây xăng Đặng Văn Bi",
      latitude : 10.83872133,
      longitude : 106.76695894,
    },
    {
      title : "Cây xăng Võ Văn Ngân",
      latitude : 10.85093529,
      longitude : 106.75581466,
    }
  ];

function FirstSlide({ navigation }) {
  return (
    <View style={styles.FirstSlideView}>
      <Text style={{ height: 30 }}> Get Your Location</Text>
      <Button title="OK" onPress={() => navigation.navigate('YourLocation')} />
    </View>
  );
}

function MapsSlide() {
  const [userposition, SetPosition] = useState('unknown');
  findMyLocation = () => {

    Geolocation.getCurrentPosition(
      position => {
        SetPosition(position);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView

        style={{ height: 500 }}
        showsUserLocation

        initialRegion={{
          latitude: 10.851456899999999,
          longitude: 106.76321229999999,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {
        location.map(item => (
        <Marker
        title = {item.title}
        coordinate = { {latitude : item.latitude,
                        longitude: item.longitude}}
        >
          <CustomMapMarker />
        </Marker>
        ))
        }



      </MapView>


      <Button
        title="Press to find your location"
        onPress={this.findMyLocation}
      />
      <Text> location : {JSON.stringify(userposition)}</Text>
    </View>
  );
}
export default function TheGasStationFind() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SelectYourLocation" component={FirstSlide} />
        <Stack.Screen name="YourLocation" component={MapsSlide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  FirstSlideView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aqua',
  },
});
