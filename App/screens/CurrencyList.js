import React from 'react';
import { StatusBar, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import colors from '../constants/colors';
import currencies from '../data/currencies.json';
import { RowItem, RowSeparator } from '../components/RowItem';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({

})

export default ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          return <RowItem text={item} onPress={() => navigation.pop()} rightIcon={
            <View style={styles.icon}>
             <FontAwesome5 name="check" size={20} color={colors.white} />   
            </View>
          }/>;
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </SafeAreaView>
  );
};
