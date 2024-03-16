import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Feather } from '@expo/vector-icons';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.border,
    justifyContent:'space-between',
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
})

export default () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
        <Icon name="chevron-right" size={20} color={colors.blue} />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
        <Icon name="external-link" size={20} color={colors.blue} />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by Example</Text>
        <Icon name="external-link" size={20} color={colors.blue} />
      </TouchableOpacity>

    </SafeAreaView>
  );
};
