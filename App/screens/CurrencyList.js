import React, { useContext } from 'react';
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
import { ConversionContext } from '../util/ConversionContext';

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
  const { setBaseCurrency, setQuoteCurrency, baseCurrency, quoteCurrency } =
    useContext(ConversionContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          let selected = false;
          if (params.isBaseCurrency && item === baseCurrency)
            return (
              <RowItem
                text={item}
                onPress={() => {
                  if (params.isBaseCurrency) {
                    setBaseCurrency(item);
                  } else {
                    setQuoteCurrency(item);
                  }
                  navigation.pop();
                }}
                rightIcon={
                  selected && (
                    <View style={styles.icon}>
                      <FontAwesome5
                        name="check"
                        size={20}
                        color={colors.white}
                      />
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
