// TabNavigator.tsx
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyPlaceScreen from '../screens/MyPlaceScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: 'account',
        }}
      />
      <Tab.Screen
        name="Myplace"
        component={MyPlaceScreen}
        options={{tabBarIcon: 'star'}}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{tabBarIcon: 'account'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
