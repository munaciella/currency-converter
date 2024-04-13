import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';
import { TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import { Entypo } from '@expo/vector-icons';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
  // headerShown='false'
  //initialRouteName="CurrencyList"
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Options" component={Options} />
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator screenOptions={{ presentation: 'modal' }}>
    <ModalStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }}/>
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ navigation, route }) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
           <TouchableOpacity onPress={() => navigation.pop()} style={{paddingHorizontal: 16}}>
            <Entypo name="cross" size={32} color={colors.blue} />
           </TouchableOpacity> 
        )
      })}
    />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);
