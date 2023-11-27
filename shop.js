import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, Linking } from 'react-native';
import Header from './component/Header';
import Menubar from './component/Menubar';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Shop({ navigation }) {
  const featuredProducts = [
    { id: 1, name: 'BEST ITEM' },
    { id: 2, name: 'WISH LIST' },
  ];

  const [wishlist, setWishlist] = useState([]);

  const siteRankings2023 = [
    { id: 1, title: '" Good surf "', link: 'https://www.goodsurf.co.kr', description: '서핑의 모든 것. 서핑 전문점 서퍼스 몰입니다. 각종 용품 및 슈트 판매, 강습 렌탈까지 모든 것을 제공합니다.' },
    { id: 2, title: '" minos surf "', link: 'https://www.surfingvillage.com', description: '서핑보드 등의 서핑 장비 및 서핑의류, 스트리트 의류를 정식 수입 판매하고 있습니다.' },
    { id: 3, title: '" surfreme "', link: 'https://www.surfreme.com', description: '서프림(Surfreme), 서핑, 서핑보드, 웻 슈트, 비치웨어, 스케이트보드, 스트릿웨어, 풋웨어, 악세사리 등.' },
    { id: 4, title: '" O summer "', link: 'https://www.osummer.co.kr', description: '배럴, 록시, 빌라봉, 퀵실버, 서핑용품 래쉬가드 웻슈트 비치웨어 등 브랜드 공식 매장.' },
    { id: 5, title: '" surfing KOREA "', link: 'https://www.surfingkorea.com', description: '서핑 프리다이빙 웨이크보딩 등 다양한 워터스포츠 용품과 프리미엄 아웃도어 상품들을 만나보세요' },
  ];

  return (
    <View style={styles.container}>
      <Header style={{ flex: 0.7 }} />
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.pageTitle}>
          <Text style={styles.pageTitleShop}>SHOP</Text>
        </Text>
        <FlatList
          style={styles.FlatList1}
          data={featuredProducts}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          scrollEnabled={false} // 스크롤 비활성화
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.gridItem}
              onPress={() => {
                if (item.name === 'BEST ITEM') {
                  navigation.navigate('Best');
                } else if (item.name == 'WISH LIST') {
                  navigation.navigate('Wishlist', { wishlist, setWishlist });
                }
              }}
            >
              <View style={styles.touchableOpacityContent}>
                <Text style={styles.shopmenutext}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <Text style={styles.pageTitle}>
          <Text style={styles.pageTitleRANK}>👑 2023년 랭킹 👑</Text>
        </Text>

        <View style={styles.siteRankingsContainer}>
          <FlatList
            data={siteRankings2023}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.gridItem2} onPress={() => { Linking.openURL(item.link); }}>
                <Text style={styles.gridItemTitle}>{item.title}</Text>
                <Text style={styles.gridItemDescription}>{item.description}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <Menubar style={styles.menubar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  siteRankingsContainer: {
    maxHeight: Dimensions.get('window').height * 0.565
  },
  gridItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0489B1',
  },
  gridItem2: {
    flex: 1,
    backgroundColor: '#0489B1',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 60,
  },
  shopmenutext: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#0489B1',
  },
  gridItemTitle: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#FACC2E',
    marginBottom: 30,
  },
  gridItemDescription: {
    fontSize: 14,
    color: '#E6E6E6',
  },
  pageTitle: {
    backgroundColor: 'white',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 1,
  },
  pageTitleShop: {
    color: '#0489B1',
    fontSize: 36,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  pageTitleRANK: {
    color: '#0489B1',
    fontSize: 20,
    fontWeight: 'light',
  },
  touchableOpacityContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menubar: {
    position: 'absolute',
    bottom: 0,
    flex: 1.4
  }
});