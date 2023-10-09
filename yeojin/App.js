import { PROVIDER_GOOGLE } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import { ScrollView, StyleSheet,View,Text,Image,Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import React, { useState,useEffect} from 'react';
import*as Location from 'expo-location';
import Header from './component/Header';
import Menubar from './component/Menubar';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function App() {

  const [mapLat, setMapLat] = useState(36.969457);
  const [mapLong, setMapLong] = useState(127.871600);
 
  const locationData1 = [
    {latitude: 37.97, longitude: 128.76, title:'죽도해변', des:'강원특별자치도 양양군 현남면'},
    {latitude: 37.96, longitude: 128.76, title:'인구해변', des:''},
    {latitude: 38.00, longitude: 128.73, title:'기사문해변'},
    {latitude: 38.15, longitude: 128.61, title:'물치해변'},
    {latitude: 38.12, longitude: 128.61, title:'설악해변'},
    {latitude: 37.98, longitude: 128.75, title:'동산해변'},
    {latitude: 38.02, longitude: 128.75, title:'하조대해변'},
    {latitude: 38.11, longitude: 128.63, title:'낙산해변'},
    {latitude: 38.13, longitude: 128.61, title:'정암해변'},
    {latitude: 38.02, longitude: 128.71, title:'중광정해변'},
  ];
  const locationData2 = [
    {latitude: 36.78, longitude: 126.14, title:'만리포해변'},
    {latitude: 34.57, longitude: 127.48, title:'남열해돋이해변'}
  ];
  const locationData3 = [
    {latitude: 35.17, longitude: 129.19, title:'송정해변'},
    {latitude: 35.04, longitude: 128.96, title:'다대포해변'},
    {latitude: 35.15, longitude: 129.11, title:'광안리해변'}
  ];
  const locationData4 = [
    {latitude: 36.12, longitude: 129.42, title:'신항만해변'},
    {latitude: 36.20, longitude: 129.37, title:'월포해변'},
    {latitude: 35.38, longitude: 129.34, title:'진하해변'}
  ];
  const locationData5 = [
    {latitude: 33.24, longitude: 126.41, title:'중문해변'},
    {latitude: 33.49, longitude: 126.45, title:'이호테우해변'},
    {latitude: 33.55, longitude: 126.79, title:'월정해변'},
    {latitude: 33.22, longitude: 126.30, title:'사계해변'}
  ];
  const locationData6 = [
    {latitude: 38.33, longitude: 128.52, title:'송지호'},
    {latitude: 38.25, longitude: 128.56, title:'천진해변'},
    {latitude: 38.19, longitude: 128.60, title:'속초해변'}
  ];

  
  return (
   <View style={styles.container}>
    <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <View style={{ flex: 8, backgroundColor: "white" }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: mapLat,
          longitude: mapLong,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
      {locationData1.map((data, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: data.latitude,
              longitude: data.longitude,
            }}
            title={`${data.title}`}
            description={`이미지`}
          >
            <Image source={require('./assets/location.png')} style={{height:40, width:40}}/>
          </Marker>
        ))}
        {locationData2.map((data, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: data.latitude,
              longitude: data.longitude,
            }}
            title={`${data.title}`}
            description={`이미지`}
          >
            <Image source={require('./assets/location1.png')} style={{height:40, width:40}}/>
          </Marker>
        ))}
        {locationData3.map((data, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: data.latitude,
              longitude: data.longitude,
            }}
            title={`${data.title}`}
            description={`이미지`}
          >
            <Image source={require('./assets/location2.png')} style={{height:40, width:40}}/>
          </Marker>
        ))}
        {locationData4.map((data, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: data.latitude,
              longitude: data.longitude,
            }}
            title={`${data.title}`}
            description={`이미지`}
          >
            <Image source={require('./assets/location3.png')} style={{height:40, width:40}}/>
          </Marker>
        ))}
        {locationData5.map((data, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: data.latitude,
              longitude: data.longitude,
            }}
            title={`${data.title}`}
            description={`이미지`}
          >
            <Image source={require('./assets/location4.png')} style={{height:40, width:40}}/>
          </Marker>
        ))}
        {locationData6.map((data, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: data.latitude,
              longitude: data.longitude,
            }}
            title={`${data.title}`}
            description={`이미지`}
          >
            <Image source={require('./assets/location5.png')} style={{height:40, width:40}}/>
          </Marker>
        ))}
      </MapView>
      </View>
      <Menubar style={{ flex: 1.4 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});