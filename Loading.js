import React from 'react';
// 스타일시트도 임폴트 하는거 잊지말자
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    // 일반적인 css에서는 찾을수 없음(리엑트 네이티브 꺼)
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA"
  },
  text: {
    color: "#2c2c2c",
    // px을 붙이면 ("20px")안에 string으로 써야함
    fontSize: 30
  }
})