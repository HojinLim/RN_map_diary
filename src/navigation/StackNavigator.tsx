// StackNavigator.tsx
import React from 'react';

import TabNavigator from './TabNavigator';

import {RootStackParamList} from '../types/navigatorType';

import HomeScreen from '../screens/HomeScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailPlaceScreen from '../screens/DetailPlaceScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Tab"
        component={TabNavigator}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailPlaceScreen}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
