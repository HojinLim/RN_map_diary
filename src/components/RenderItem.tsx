import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import Animated, {
  FadeInDown,
  FadeOutDown,
  Layout,
} from "react-native-reanimated";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SharedElementStackParamList } from "../types/navigatorType";
import { CardType } from "../types/commonType";
import { IconButton, MD3Colors } from "react-native-paper";

type Props = {
  item: CardType;
  index: number;
  onClose: (index: number) => void;
};

const RenderItem = ({ item, index, onClose }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();
  return (
    <Animated.View
      layout={Layout.duration(200).delay(200)}
      entering={FadeInDown.delay(200 * index)}
      exiting={FadeOutDown}
    >
      <Pressable
        style={styles.container}
        onPress={() => {
          navigation.navigate("Detail", item);
        }}
      >
        <IconButton
          style={styles.closeButton}
          icon="close-circle-outline"
          iconColor={MD3Colors.error50}
          size={24}
          onPress={() => onClose(index)}
        />
        <Animated.Image
          source={item.image}
          style={styles.image}
          sharedTransitionTag={item.id}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{item.title}</Text>
          <Text style={styles.textLocation}>{item.place_name}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  textContainer: {
    margin: 20,
    flexShrink: 1,
    gap: 10,
  },
  textName: {
    color: "#323232",
    fontSize: 28,
    fontWeight: "bold",
  },
  textLocation: {
    color: "#323232",
    fontSize: 18,
  },
  closeButton: {
    position: "absolute",
    top: -10,
    right: 0,
    padding: 4,
  },
});
