import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../src/screens/SplashScreen';
import LoginScreen from '../src/screens/QrCodeScreen';
import ScreenConfig from '../src/screens/ScreenConfig';
import MessageScreen from '../src/screens/MessageScreen';
import TestScreen from '../src/screens/TestScreen';

const Stack = createNativeStackNavigator();
export default function NavigationRouter() {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="test">
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="qr_code" component={LoginScreen} />
        <Stack.Screen name="config" component={ScreenConfig} />
        <Stack.Screen name="message" component={MessageScreen} />
        <Stack.Screen name="test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
