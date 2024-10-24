// RootNavigator.js
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Screens/SplashScreen/Splash';
import Login from '../Screens/Authentication/Login';
import CheckAuth from '../Screens/Authentication/CheckAuth';
import Register from '../Screens/Authentication/Register';
import AppTabNavigator from './AppTabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CheckAuth" component={CheckAuth} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={AppTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
