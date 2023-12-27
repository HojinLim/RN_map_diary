// StackNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";

import SignupScreen from "../components/SignupScreen";
import { SharedElementStackParamList } from "../types/navigatorType";
import LoginForm from "../components/LoginForm";
import HomeScreen from "../screens/HomeScreen";

import PlaceList from "../components/PlaceList";
import DetailPlaceScreen from "../screens/DetailPlaceScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createStackNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<SharedElementStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen
        name="PlaceList"
        component={PlaceList}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailPlaceScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
