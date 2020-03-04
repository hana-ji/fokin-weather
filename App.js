import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}></View>
      <View style={styles.blueView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  // 부모
  container: {
    // 모든 공간 사용가능함을 의미함
    flex: 1,
    backgroundColor: '#114',
  },
  yellowView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  blueView: {
    flex: 3,
    backgroundColor: 'blue',
  },
});

/*  리액트 네이티브에서 레이아웃에 대한 규칙 
    네이티브에서 flexbox의 디폴트는 
    - flexDirection: column임
    - flex: 1
    전체 공간을 다 차지하고싶다면 flex:1
    형제같은게 있다 (옐로 블루) 1:3 이런식으로 높이 설정 가능
    width, height 말고 flex로 레이아웃 코딩 하자 !
*/