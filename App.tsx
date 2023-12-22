import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import { useEffect } from "react";
import { activateKeepAwakeAsync } from "expo-keep-awake";
import SearchScreen from "./src/screens/SearchScreen";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();


  useEffect(() => {
		activateKeepAwakeAsync();
	}, [])

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:'account'}}/>
        <Tab.Screen name="Search" component={SearchScreen} options={{tabBarIcon:'magnify'}}/>
        <Tab.Screen name="Account" component={AccountScreen}  options={{tabBarIcon:'bell'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
