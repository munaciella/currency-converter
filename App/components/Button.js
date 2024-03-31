import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({

});
export const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require("../assets/images/reverse.png")}/>
        <Text>{text}</Text>
    </TouchableOpacity>
  );
};
