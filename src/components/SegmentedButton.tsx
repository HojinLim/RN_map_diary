import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";

type Props = {};

const SegmentedButton = (props: Props) => {
  const [value, setValue] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "walk",
            label: "Walking",
          },
          {
            value: "train",
            label: "Transit",
          },
          { value: "drive", label: "Driving" },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default SegmentedButton;