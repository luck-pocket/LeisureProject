import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Header from './component/Header';
import Menubar from './component/Menubar';
import Svg, { Line } from 'react-native-svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <ScrollView style={{ flex: 8, backgroundColor: "white" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled={true}>
          <Image source={require("./assets/001.png")} style={styles.cardNews} />
          <Image source={require("./assets/002.png")} style={styles.cardNews} />
          <Image source={require("./assets/003.png")} style={styles.cardNews} />
          <Image source={require("./assets/004.png")} style={styles.cardNews} />
          <Image source={require("./assets/005.png")} style={styles.cardNews} />
          <Image source={require("./assets/006.png")} style={styles.cardNews} />
          <Image source={require("./assets/007.png")} style={styles.cardNews} />
        </ScrollView>
        <View>
          <View style={styles.mainTitle}>
            <Text style={styles.mainText}>랜탈샵</Text>
            <Svg height="100%" width="60%">
              <Line x1="3%" y1="70%" x2="100%" y2="70%" stroke="#5E5E5E" strokeWidth="1.5"></Line>
            </Svg>
            <Text style={styles.moreView}>더보기 &gt; </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 45 }}>
            <View style={styles.rentEle}>
              <Image source={require("./assets/lastwave.jpg")} style={styles.rentImg} resizeMode='contain' />
              <Text style={{ fontSize: 20, fontWeight: 800 }}>라스트웨이브 송정</Text>
              <Text>부산 해운대구 송정동</Text>
              <Text>051-701-7922</Text>
            </View>
            <View style={styles.rentEle}>
              <Image source={require("./assets/surfroad.jpg")} style={styles.rentImg} resizeMode='contain' />
              <Text style={{ fontSize: 20, fontWeight: 800 }}>서프로드 송정</Text>
              <Text>부산 해운대구 송정동</Text>
              <Text>070-4121-2222</Text>
            </View>
            <View style={styles.rentEle}>
              <Image source={require("./assets/moon.png")} style={styles.rentImg} resizeMode='contain' />
              <Text style={{ fontSize: 20, fontWeight: 800 }}>문서프 제주</Text>
              <Text>제주 제주시 애월읍</Text>
              <Text>0507-1416-3332</Text>
            </View>
            <View style={styles.rentEle}>
              <Image source={require("./assets/드리프터.jpg")} style={styles.rentImg} resizeMode='contain' />
              <Text style={{ fontSize: 20, fontWeight: 800 }}>드리프터 양양</Text>
              <Text>강원 양양군 현남면</Text>
              <Text>0507-1457-0910</Text>
            </View>
            <View style={styles.rentEle}>
              <Image source={require("./assets/tyler.jpg")} style={styles.rentImg} resizeMode='contain' />
              <Text style={{ fontSize: 20, fontWeight: 800 }}>타일러서프 양양</Text>
              <Text>강원 양양군 현남면</Text>
              <Text>033-672-8993</Text>
            </View>
          </ScrollView>
        </View>
        <View>
          <View style={styles.mainTitle}>
            <Text style={styles.mainText}>마    켓</Text>
            <Svg height="100%" width="60%">
              <Line x1="3%" y1="70%" x2="100%" y2="70%" stroke="#5E5E5E" strokeWidth="1.5"></Line>
            </Svg>
            <Text style={styles.moreView}> 더보기 &gt; </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <Image source={require("./assets/S1MN30100.jpg")} style={styles.marketImg} resizeMode='contain' />
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 5 }}>모던 서핑보드 7.4</Text>
                <Text style={{ fontSize: 17, color: "red", marginTop: 5 }}>1,260,000원</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image source={require("./assets/S13G204WH.jpg")} style={styles.marketImg} resizeMode='contain' />
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 5 }}>그라나무 소프트보드 9.0</Text>
                <Text style={{ fontSize: 17, color: "red", marginTop: 5 }}>550,000원</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
              <View style={{ alignItems: "center", marginLeft: 20 }}>
                <Image source={require("./assets/리시코드.jpg")} style={styles.marketImg} resizeMode='contain' />
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 5 }}>서핑 리시코드 발목 스트랩</Text>
                <Text style={{ fontSize: 17, color: "red", marginTop: 5 }}>21,340원</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image source={require("./assets/패들보드.jpg")} style={styles.marketImg} resizeMode='contain' />
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 5 }}>패들 보드 물놀이 스탠딩 서핑보드</Text>
                <Text style={{ fontSize: 17, color: "red", marginTop: 5 }}>214,160원</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 55 }}>
          <View style={styles.mainTitle}>
            <Text style={styles.mainText}>게시판</Text>
            <Svg height="100%" width="60%">
              <Line x1="3%" y1="70%" x2="100%" y2="70%" stroke="#5E5E5E" strokeWidth="1.5"></Line>
            </Svg>
            <Text style={styles.moreView}> 더보기 &gt; </Text>
          </View>
          <View>
            <Text style={styles.commText}>테스트입니다.</Text>
            <Text style={styles.commText}>테스트입니다.</Text>
            <Text style={styles.commText}>테스트입니다.</Text>
            <Text style={styles.commText}>테스트입니다.</Text>
            <Text style={styles.commText}>테스트입니다.</Text>
          </View>
        </View>
        <View style={{ marginTop: 40}}>
          <View style={styles.mainTitle}>
            <Text style={styles.mainText}>날    씨</Text>
            <Svg height="100%" width="60%">
              <Line x1="3%" y1="70%" x2="100%" y2="70%" stroke="#5E5E5E" strokeWidth="1.5"></Line>
            </Svg>
            <Text style={styles.moreView}> 더보기 &gt; </Text>
          </View>
          <View>
            
          </View>
        </View>
      </ScrollView>
      <Menubar style={{ flex: 1.4 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardNews: {
    width: SCREEN_WIDTH, height: SCREEN_WIDTH
  },
  mainTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
  },
  moreView: {
    color: "#5E5E5E",
    fontSize: 16,
    marginTop: "2%",
    marginLeft: 10,
  },
  rentEle: {
    alignItems: "center",
    marginLeft: 20
  },
  rentImg: {
    width: 120,
    height: 120,
    marginBottom: 12,
  },
  marketImg: {
    width: 180, height: 190
  },
  commText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 15,
  }
})
