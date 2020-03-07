import React, { useEffect } from 'react';
import Loading from './Loading';
// * = 모든것
import * as Location from 'expo-location';

// 이름 써줄필요 x
export default class extends React.Component {
  getLocation = async() => {
    const location = await Location.getCurrentPositionAsync(options)
  }
  componentDidMount(){ 
    // await functionality라서 위에 선언하고 불러옴
    this.getLocation();
  };
  render(){
    return (
      <Loading />
    );
  }
}