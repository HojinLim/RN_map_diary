import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";

type Props = {
  selectedTag: (place: string) => void;
};

const SegmentedButton = ({ selectedTag: selectedTag }: Props) => {
  const [value, setValue] = React.useState("");
  useEffect(() => {
    selectedTag(value);
  }, [value]);

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          { value: "전체", label: "전체" },
          {
            value: "여행",
            label: "여행",
          },
          {
            value: "드라이브",
            label: "드라이브",
          },
          { value: "맛집", label: "맛집" },
         
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
