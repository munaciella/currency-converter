import React, {useState, useEffect}from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  Keyboard
} from 'react-native';
import colors from '../constants/colors';
import { ConversionInput } from '../components/ConversionInput';
import { format } from 'date-fns';
import { Button } from '../components/Button';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    
  },
  content: {
    paddingTop: screen.height * 0.2
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
});

export default () => {
  const baseCurrency = 'USD';
  const quoteCurrency = 'GBP';
  const conversionRate = 0.8345;
  const date = new Date();

  const [scrollEnabled, setScrollEnabled] = useState(false)

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => {
      setScrollEnabled(true)
    })

    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
      setScrollEnabled(false)
    })

    return () => {
      showListener.remove()
      hideListener.remove()
    }
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.content}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/background.png')}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.textHeader}>Currency Converter</Text>
      <View style={styles.inputContainer}>
      <ConversionInput
        text={baseCurrency}
        value="123"
        onButtonPress={() => alert('todo!')}
        keyboardType="numeric"
        onChangeText={(text) => console.log('text', text)}
      />
      <ConversionInput
        text={quoteCurrency}
        value="123"
        editable={false}
        onButtonPress={() => alert('todo!')}
      />
      </View>
      <Text style={styles.text}>
        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(date, 'do MMMM yyyy')}.`}
      </Text>
      <Button text="Reverse Currencies" onPress={() => alert('todo!')}/>
      <View style={{height: screen.height}} />
      </View>
      </ScrollView>
    </View>
  );
};
