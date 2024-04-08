import React from 'react';
import { StatusBar, FlatList, View } from 'react-native';
import colors from '../constants/colors';
import currencies from '../data/currencies.json'
import { RowItem, RowSeparator } from '../components/RowItem';

export default () => (
    <View style={{backgroundColor: colors.white}}>
  <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
  <FlatList
  data={currencies}
  renderItem={({item}) => {
    return (
        <RowItem
        text={item}
        />
    )
  }}
  keyExtractor={(item) => item}
  ItemSeparatorComponent={() => <RowSeparator />}
  />
  </View>
);
