import React, { useEffect } from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      // 나중에 API에 전송하고 날씨 가져올거
      const {coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false});
    } catch (error) {
      // try 부분이 에러가 생기면 catch가 실행됨
      Alert.alert("can't find you", "So sad")
    }
  };
  componentDidMount(){ 
    this.getLocation();
  };
  render(){
    const { isLoading } = this.state;
    return 
      isLoading ? <Loading /> : null;
  }
}