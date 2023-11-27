import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from './component/Header';
import Menubar from './component/Menubar';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler'; // 추가

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Wishlist({ route }) {
  const { wishlist } = route.params || {}; // route.params가 정의되어 있지 않을 경우 빈 객체로 초기화
  const totalAmount = wishlist.reduce((sum, item) => sum + parseInt(item.price.replace(',', '')), 0);

  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <View style={{ flex: 8, justifyContent: 'center', backgroundColor: 'white' }}>
        <Text style={styles.pageTitle}>Wishlist</Text>
        <FlatList
          data={wishlist}
          keyExtractor={(productId) => productId.toString()}
          renderItem={({ item }) => (
            <View style={styles.wishlistItem}>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.additionalInfoContainer}>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            </View>
          )}
        />
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalAmountText}>Total Amount: ₩{totalAmount.toLocaleString()}</Text>
        </View>
      </View>
      <Menubar style={{ flex: 1.4 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  wishlistItem: {
    margin: 10,
    padding: 10,
    borderRadius: 12,
    borderWidth: 0,
    borderColor: '#D3D3D3',
    borderColor: '#D3D3D3',
    backgroundGradient: {
      colors: ['#EFEFEF', '#F5F5F5'], // 그라데이션 색상
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    color: '#333', // 글자 색상 변경
  },
  productPrice: {
    color: '#0489B1',
  },
  additionalInfoContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E1E1E1',
    paddingTop: 10,
  },
  additionalInfoText: {
    fontSize: 12,
    color: '#777',
  },
  pageTitle: {
    top: 0,
    backgroundColor: 'white',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 1,
    color: '#0489B1',
    fontSize: 36,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  totalAmountContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#0489B1',
    paddingTop: 10,
    alignItems: 'center',
  },
  totalAmountText: {
    fontSize: 18,
    fontWeight: '200',
    color: '#0489B1',
  },
});
