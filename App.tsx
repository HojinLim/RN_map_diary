import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { activateKeepAwakeAsync } from "expo-keep-awake";

import StackNavigator from "./src/navigation/StackNavigator";
import { PaperProvider } from "react-native-paper";

export default function App() {
  useEffect(() => {
    activateKeepAwakeAsync();
  }, []);

  return (
    <PaperProvider>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </PaperProvider>
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
