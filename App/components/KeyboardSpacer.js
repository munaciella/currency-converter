import React, { useState, useEffect } from 'react';
import { View, Keyboard, Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export const KeyboardSpacer = () => {

    useEffect(() => {
        const showListener = Keyboard.addListener()
    }, [])

  return <View style={styles.container} />;
};
