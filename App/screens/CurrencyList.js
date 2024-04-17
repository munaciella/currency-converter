import React from 'react';
import {
  StatusBar,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../constants/colors';
import currencies from '../data/currencies.json';
import { RowItem, RowSeparator } from '../components/RowItem';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    backgroundColor: colors.blue,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ({ navigation, route = {} }) => {
  const params = route.params || {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const selected = params.activeCurrency === item;
          return (
            <RowItem
              text={item}
              onPress={() => {
                params.onChange && params.onChange(item)
                navigation.pop()
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <FontAwesome5 name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </SafeAreaView>
  );
};
