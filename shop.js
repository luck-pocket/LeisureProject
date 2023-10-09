import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Image, Dimensions, ScrollView, SafeAreaView, Alert } from 'react-native';
// 헤더, 메뉴바 import
import Header from './component/Header';
import Menubar from './component/Menubar';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Shop({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <View style={{ flex: 8, backgroundColor: "white" }}>
        
        

      </View>
      <Menubar style={{ flex: 1.4 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})