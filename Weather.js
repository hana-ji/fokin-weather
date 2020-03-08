import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from "prop-types";

export default function Weather({temp}){
  // text는 temperature가 될 것
return (
  <View style={styles.container}>
    <Text>{temp}</Text>
  </View>);
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems:"center"
  }
})