import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import MyPlaceScreen from "./MyPlaceScreen";

type Props = {};

const AccountScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={160}
        source={require("../assets/images/defaultProfile.png")}
      />
      <MyPlaceScreen/>

    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
