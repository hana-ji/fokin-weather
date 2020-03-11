import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from "prop-types";
// 엑스포에서 아이콘 import 가능 import { Ionicons } from "@expo/vector-icons"; 바뀐부분 = 다른 아이콘 페밀리로 변경 가능
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({temp,condition}){
return (
  <View style={styles.container}>
    <View style={styles.halfContainer}>
      {/* 아이콘 사이즈 조절은 이렇게 하면 됨 */}
      <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
      <Text style={styles.temp}>{temp}'</Text>
    </View>
    <View style={styles.halfContainer} />
  </View>);
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
    justifyContent: "center",
    alignItems:"center"
  },
  temp: {
    fontSize: 42,
  },
  halfContainer: {
    flex:1,
    justifyContent: "center",
    alignItems:"center"
  }
});