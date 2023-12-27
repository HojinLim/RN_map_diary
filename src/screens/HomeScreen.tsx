import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
});
