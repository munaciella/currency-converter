import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert, StatusBar } from 'react-native';
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
      <StatusBar barStyle="dark-content" backgroundColor={colors.white}/>
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
          onPress={() => openURL('https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter')}
          rightIcon={
            <Icon name="external-link" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          text="React Native by Example"
          onPress={() => openURL('https://reactnativebyexample.com')}
          rightIcon={
            <Icon name="external-link" size={20} color={colors.blue} />
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};
