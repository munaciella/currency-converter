import React, { useState, useEffect } from 'react';
import { View, Keyboard, Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export const KeyboardSpacer = ({onToggle}) => {
    const [keyboardSpace, setKeyboardSpace] = useState(0)
  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => {
        onToggle(true)
    });

    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
        onToggle(false)
    });

    return () => {
        showListener.remove()
        hideListener.remove()
    }
  }, []);

  return <View style={[styles.container, {height: keyboardSpace}]} />;
};
