import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { activateKeepAwakeAsync } from "expo-keep-awake";

import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  useEffect(() => {
    activateKeepAwakeAsync();
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
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
