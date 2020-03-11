import React from 'react';
// 상태표시바(statusbar)가 어두워서 (보이지않는 연결다리???로 연결)
import {StyleSheet,View,Text,StatusBar} from 'react-native';
import PropTypes from "prop-types";
// 그라데이션 임폴트
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  // 날씨랑 똑같이 적어야함
  Haze : {
    // 날씨가 Haze일 때, 아이콘네임은 이거여야함
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Thunderstorm: {
    iconName: "",
    gradient: []
  },
  Drizzle: {
    iconName: "",
    gradient: []
  },
  Rain: {
    iconName: "",
    gradient: []
  },
  Snow: {
    iconName: "",
    gradient: []
  },
  Atmosphere: {
    iconName: "",
    gradient: []
  },
  Clear: {
    iconName: "",
    gradient: []
  },
  Clouds: {
    iconName: "",
    gradient: []
  },
  Mist: {
    iconName: "",
    gradient: []
  },
  Dust: {
    iconName: "",
    gradient: []
  }
  
};

export default function Weather({ temp, condition }){
return (
  /* View 없이 직접 container 설정해도 라인그레디언트가 잘 적용됨 */
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
      >
      {/* 보이지않는 component(css에 영향x), props로 변경가능 바 스타일 디폴트= 다크 */}
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons 
          size={96}
          name={weatherOptions[condition].iconName}
          color="white" 
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer} />
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex:1,
    justifyContent: "center",
    alignItems:"center"
  }
});