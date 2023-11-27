import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Header from './component/Header';
import Menubar from './component/Menubar';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Linking,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Best({ navigation }) {
  const [wishlist, setWishlist] = useState([]);

  const products = [
    {
      id: 1,
      name: 'STICKY BUMPS 왁스 5종',
      price: '4,000원',
      image: require('./assets/best1.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=454401&xcode=004&mcode=007&scode=001&GfDT=a2h3UQ%3D%3D', // 첫 번째 상품의 URL 추가
    },
    {
      id: 2,
      name: 'CREATURES 숏보드 릴라이언스',
      price: '64,000원',
      image: require('./assets/best2.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=11409594&xcode=004&mcode=004&scode=009&GfDT=aW53Vg%3D%3D', // 두 번째 상품의 URL 추가
    },
    {
      id: 3,
      name: 'RIPCURL 여성 다운패트롤 집업 슈트',
      price: '169,000원',
      image: require('./assets/best3.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=11458729&xcode=005&mcode=002&scode=003&GfDT=bml0W1o%3D', // 첫 번째 상품의 URL 추가
    },
    {
      id: 4,
      name: 'RIPCURL 드라이 한정판 체스트집',
      price: '749,000원',
      image: require('./assets/best4.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=11468091&xcode=005&mcode=001&scode=004&GfDT=bm94W1Q%3D', // 두 번째 상품의 URL 추가
    },
    {
      id: 5,
      name: 'RIPCURL 플래시밤 3mm 후드',
      price: '79,000원',
      image: require('./assets/best5.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=493413&xcode=005&mcode=003&scode=003&GfDT=bm96W1k%3D', // 첫 번째 상품의 URL 추가
    },
    {
      id: 6,
      name: '카이 살라스 HP 퍼포먼스 센터핀',
      price: '109,000원',
      image: require('./assets/best6.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=11467930&xcode=004&mcode=009&scode=004&GfDT=Zmx3VQ%3D%3D', // 두 번째 상품의 URL 추가
    },
    {
      id: 7,
      name: 'RIPCURL 주니어 백집 서핑슈트',
      price: '269,000원',
      image: require('./assets/best7.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=11467896&xcode=014&mcode=003&scode=002&type=Y&sort=regdate&cur_code=014003&GfDT=bm99W1w%3D', // 첫 번째 상품의 URL 추가
    },
    {
      id: 8,
      name: '슈퍼라이트 롱보드 9ft 발목리쉬',
      price: '72,000원',
      image: require('./assets/best8.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=11408546&xcode=008&mcode=003&scode=005&type=Y&sort=regdate&cur_code=008003&GfDT=amt3UQ%3D%3D', // 두 번째 상품의 URL 추가
    },
    {
      id: 9,
      name: 'STICKY BUMPS 왁스 5종',
      price: '4,000원',
      image: require('./assets/best1.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=454401&xcode=004&mcode=007&scode=001&GfDT=a2h3UQ%3D%3D', // 첫 번째 상품의 URL 추가
    },
    {
      id: 10,
      name: 'CREATURES 숏보드 릴라이언스',
      price: '64,000원',
      image: require('./assets/best2.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=11409594&xcode=004&mcode=004&scode=009&GfDT=aW53Vg%3D%3D', // 두 번째 상품의 URL 추가
    },
    {
      id: 11,
      name: 'RIPCURL 여성 다운패트롤 집업 슈트',
      price: '169,000원',
      image: require('./assets/best3.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=11458729&xcode=005&mcode=002&scode=003&GfDT=bml0W1o%3D', // 첫 번째 상품의 URL 추가
    },
    {
      id: 12,
      name: 'RIPCURL 드라이 한정판 체스트집',
      price: '749,000원',
      image: require('./assets/best4.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=11468091&xcode=005&mcode=001&scode=004&GfDT=bm94W1Q%3D', // 두 번째 상품의 URL 추가
    },
    {
      id: 13,
      name: 'RIPCURL 플래시밤 3mm 후드',
      price: '79,000원',
      image: require('./assets/best5.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=493413&xcode=005&mcode=003&scode=003&GfDT=bm96W1k%3D', // 첫 번째 상품의 URL 추가
    },
    {
      id: 14,
      name: '카이 살라스 HP 퍼포먼스 센터핀',
      price: '109,000원',
      image: require('./assets/best6.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=11467930&xcode=004&mcode=009&scode=004&GfDT=Zmx3VQ%3D%3D', // 두 번째 상품의 URL 추가
    },
    {
      id: 15,
      name: 'RIPCURL 주니어 백집 서핑슈트',
      price: '269,000원',
      image: require('./assets/best7.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=11467896&xcode=014&mcode=003&scode=002&type=Y&sort=regdate&cur_code=014003&GfDT=bm99W1w%3D', // 첫 번째 상품의 URL 추가
    },
    {
      id: 16,
      name: '슈퍼라이트 롱보드 9ft 발목리쉬',
      price: '72,000원',
      image: require('./assets/best8.png'),
      url: 'http://www.surfers.co.kr/shop/shopdetail.html?branduid=11408546&xcode=008&mcode=003&scode=005&type=Y&sort=regdate&cur_code=008003&GfDT=amt3UQ%3D%3D', // 두 번째 상품의 URL 추가
    },
  ];

  // 상품을 위시리스트에서 추가 또는 제거하는 함수
  const toggleWishlist = (productId) => {
    // 이미 위시리스트에 있는 경우 제거
    if (wishlist.some((item) => item.id === productId)) {
      setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
    } else {
      // 아직 위시리스트에 없는 경우 추가
      const productToAdd = products.find((item) => item.id === productId);
      setWishlist((prevWishlist) => [...prevWishlist, productToAdd]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="white" />
      <Header style={{ flex: 0.7 }} />
      <View style={{ flex: 8, justifyContent: 'center', backgroundColor: "white" }}>

        <Text style={styles.pageTitle}>
          <Text style={styles.pageTitleText}>BEST</Text> <Text style={styles.pageTitleText}>ITEM</Text>
        </Text>

        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={item.image} style={styles.productImage} resizeMode='contain' />
              <TouchableOpacity
                style={[
                  styles.toggleWishlistButton,
                  wishlist.includes(item.id) && styles.wishlistButtonActive,
                ]}
                onPress={() => {
                  toggleWishlist(item.id);
                }}
              >
                <FontAwesomeIcon
                  name={wishlist.some((w) => w.id === item.id) ? 'check' : 'heart'}
                  size={20}
                  color={wishlist.some((w) => w.id === item.id) ? 'black' : 'red'}
                />
              </TouchableOpacity>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity
                style={styles.buyButton}
                onPress={() => {
                  // 해당 상품의 URL로 이동
                  Linking.openURL(item.url);
                }}
              >
                <Text style={styles.buyButtonText}>구매</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.viewWishlistButton}
          onPress={() => {
            navigation.navigate('Wishlist', { wishlist });
          }}
        >
          <Text style={styles.viewWishlistButtonText}>View Wishlist</Text>
        </TouchableOpacity>
      </View>
      <Menubar style={{ flex: 1.4 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  pageTitle: {
    top: 0,
    backgroundColor: 'white',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 1,
  },
  pageTitleText: {
    color: '#0489B1',
    fontSize: 36,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  productCard: {
    width: SCREEN_WIDTH * 0.45,
    margin: 10,
    backgroundColor: 'white',
    elevation: 3,
  },
  productImage: {
    height: '100%',
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
    height: 150,
  },
  productName: {
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 11,
  },
  productPrice: {
    padding: 5,
    fontSize: 14,
    color: '#0489B1',
    marginBottom: 20
  },
  toggleWishlistButton: {
    padding: 10,
    alignItems: 'center',
  },
  toggleWishlistButtonText: {
    color: 'white',
  },
  wishlistIndicator: {
    padding: 10,
    fontSize: 14,
    color: 'blue',
  },
  wishlistButtonActive: {
    backgroundColor: 'white',
  },
  buyButton: {
    borderColor: '#0489B1',
    borderWidth: 0.5,
    padding: 10,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'black',
    fontWeight: '200',
    fontSize: 13,
  },
  viewWishlistButton: {
    backgroundColor: '#0489B1',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  viewWishlistButtonText: {
    color: 'white',
    fontWeight: '200',
    fontSize: 16,
  },
});