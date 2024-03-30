import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({

});
export const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image />
        <Text>{text}</Text>
    </TouchableOpacity>
  );
};
