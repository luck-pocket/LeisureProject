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
    {latitude: 37.974, longitude: 128.759, title:'죽도해변', des:"강원특별자치도 양양군 현남면 시변리 33-38"},
    {latitude: 37.969, longitude: 128.762, title:'인구해변', des:'강원특별자치도 양양군 현남면 인구길 28-25'},
    {latitude: 38.006, longitude: 128.731, title:'기사문해변', des:"강원특별자치도 양양군 현북면 기사문길 8"},
    {latitude: 38.153, longitude: 128.608, title:'물치해변', des:"강원특별자치도 양양군 현북면 기사문길 8"},
    {latitude: 38.130, longitude: 128.623, title:'설악해변', des:"강원특별자치도 양양군 강현면 동해대로 3254"},
    {latitude: 37.982, longitude: 128.757, title:'동산해변', des:"강원특별자치도 양양군 현남면 동해대로 912"},
    {latitude: 38.024, longitude: 128.723, title:'하조대해변', des:"강원특별자치도 양양군 현북면 하광정리 378-11"},
    {latitude: 38.117, longitude: 128.633, title:'낙산해변', des:"강원특별자치도 양양군 강현면 해맞이길 55"},
    {latitude: 38.138, longitude: 128.615, title:'정암해변', des:"강원특별자치도 양양군 강현면 정암리 153-4"},
    {latitude: 38.027, longitude: 128.718, title:'중광정해변', des:"강원특별자치도 양양군 현북면 중광정리 129-9"},
  ];
  const locationData2 = [
    {latitude: 36.786, longitude: 126.141, title:'만리포해변',des:"충청남도 태안군 소원면 모항리 1436"},
    {latitude: 34.580, longitude: 127.486, title:'남열해돋이해변', des:"전라남도 고흥군 영남면 남열리 175-2"}
  ];
  const locationData3 = [
    {latitude: 35.178, longitude: 129.199, title:'송정해변', des:"부산광역시 해운대구 송정동 713-8"},
    {latitude: 35.045, longitude: 128.964, title:'다대포해변', des:"부산광역시 사하구 다대동 1552-20"},
    {latitude: 35.153, longitude: 129.119, title:'광안리해변', des:"부산광역시 수영구 민락동 186"}
  ];
  const locationData4 = [
    {latitude: 36.113, longitude: 129.432, title:'신항만해변',des:"경상북도 포항시 북구 흥해읍 영일만항로 151"},
    {latitude: 36.203, longitude: 129.371, title:'월포해변', des:"경상북도 포항시 북구 청하면 용두리 431-41"},
    {latitude: 35.383, longitude: 129.345, title:'진하해변', des:"울산광역시 울주군 서생면 진하해변길 77"}
  ];
  const locationData5 = [
    {latitude: 33.245, longitude: 126.412, title:'중문해변', des:"제주특별자치도 서귀포시 색달동 3306-3"},
    {latitude: 33.498, longitude: 126.453, title:'이호테우해변', des:"제주특별자치도 제주시 이호일동 1781-6"},
    {latitude: 33.555, longitude: 126.796, title:'월정해변', des:"제주특별자치도 제주시 구좌읍 월정리 652-4"},
    {latitude: 33.230, longitude: 126.309, title:'사계해변', des:"제주특별자치도 서귀포시 안덕면 사계리 2294-35"}
  ];
  const locationData6 = [
    {latitude: 38.332, longitude: 128.528, title:'송지호',des:"강원특별자치도 고성군 죽왕면 오호리 1-5"},
    {latitude: 38.259, longitude: 128.560, title:'천진해변',des:"강원특별자치도 고성군 토성면 천진리 111-5"},
    {latitude: 38.190, longitude: 128.604, title:'속초해변',des:"강원특별자치도 속초시 조양동 1450-178"}
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
            description={`${data.des}`}
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
            description={`${data.des}`}
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
            description={`${data.des}`}
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
            description={`${data.des}`}
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
            description={`${data.des}`}
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
            description={`${data.des}`}
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