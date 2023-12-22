import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";
import { IconButton, MD3Colors, Surface } from "react-native-paper";

type Props = {
  onPress: () => void;
};

export const UndoButton = ({ onPress }: Props): ReactElement => (
  <Surface style={styles.container} elevation={4}>
    <IconButton
      icon="undo"
      iconColor={MD3Colors.primary70}
      size={20}
      onPress={onPress}
    />
  </Surface>
);

export default UndoButton;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 14,
    right: 14,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgb(85,	124, 244)",
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
  },
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowRadius: 4,
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 0 },
  },
  elevation: {
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 1)",
  },
});
