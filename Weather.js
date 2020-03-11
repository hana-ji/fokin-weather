import React from 'react';
// 상태표시바(statusbar)가 어두워서 (보이지않는 연결다리???로 연결)
import {StyleSheet,View,Text,StatusBar} from 'react-native';
import PropTypes from "prop-types";
// 그라데이션 임폴트
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"]
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"]
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"]
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"]
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know, fucking boring"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title:"Haze",
    subtitle:"just don't go outside",
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
      {/* 2개 스타일 함께 놓음 */}
      <View style={{...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>
          {weatherOptions[condition].title} 
        </Text>   
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
  },
  title: {
    color: "white",
    fontSize: 44,
    // text로 안되고 string이어야 함
    fontWeight: "400",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});