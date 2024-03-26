import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white

    },
    button: {

    },
    buttonText: {

    },
    input: {

    }
});

export const ConversionInput = ({ text, value, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input}/>
    </View>
  );
};
