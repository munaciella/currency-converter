import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Feather } from '@expo/vector-icons';
import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

const openURL = (url) => {
    return Linking.openURL(url).catch(() => {
        Alert.alert('An error occurred', 'Could not open the url')
    })
}

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() => alert('todo!')}
          rightIcon={
            <Icon name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          text="React Native Basics"
          onPress={() => alert('todo!')}
          rightIcon={
            <Icon name="external-link" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          text="React Native by Example"
          onPress={() => alert('todo!')}
          rightIcon={
            <Icon name="external-link" size={20} color={colors.blue} />
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};
