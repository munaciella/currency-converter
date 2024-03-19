import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Feather } from '@expo/vector-icons';
import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

export default () => {
  return (
    <SafeAreaView>
        <ScrollView>
      <RowItem
        text="Themes"
        onPress={() => alert('todo!')}
        rightIcon={<Icon name="chevron-right" size={20} color={colors.blue} />}
      />

      <RowSeparator />

      <RowItem
        text="React Native Basics"
        onPress={() => alert('todo!')}
        rightIcon={<Icon name="external-link" size={20} color={colors.blue} />}
      />

      <RowSeparator />

      <RowItem
        text="React Native by Example"
        onPress={() => alert('todo!')}
        rightIcon={<Icon name="external-link" size={20} color={colors.blue} />}
      />
      </ScrollView>
    </SafeAreaView>
  );
};
