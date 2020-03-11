import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "e623e85818d14b3c72a3bd75c8071736";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {
      data: {
          main: { temp },
          weather
      }
} = await axios.get(
      //  template srings임 (자바스크립트 es6버전)
      //  중괄호 안에는 $를 넣어줘야함
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({ 
      isLoading:false, 
      condition: weather[0].main,
      temp
    })
  };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude} 
      } = await Location.getCurrentPositionAsync();
      // 같은 인자값이 함수에 넘겨짐
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false});
    } catch (error) {
      Alert.alert("can't find you", "So sad")
    }
  };
  componentDidMount(){ 
    this.getLocation();
  };
  render(){
    const { isLoading, temp, condition } = this.state;
    // 온도 숫자 (소수점 제외)
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}