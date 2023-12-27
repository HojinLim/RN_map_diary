// DetailPlaceScreen.tsx
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { SharedElementStackParamList } from "../types/navigatorType";
import { RouteProp } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeInDown,

} from "react-native-reanimated";
import Header from "../components/Header";


type DetailsScreenRouteProp = RouteProp<SharedElementStackParamList, "Detail">;

type Props = {
  route: DetailsScreenRouteProp;
};

const DetailPlaceScreen = ({ route }: Props) => {
  const item = route.params;
  const { width } = useWindowDimensions();

  console.log(route.params?.title);

  return (
    <View>
      <Header />
      <View>
        <Animated.Image
          sharedTransitionTag={item.id}
          source={item.image}
          style={{ width: width, height: width }}
        />
        <Animated.View
          style={styles.textContainer}
          entering={FadeIn.delay(600)}
        >
          <Text style={styles.textName}>{item.title}</Text>
          <Text style={styles.textLocation}>{item.place_name}</Text>
        </Animated.View>
      </View>
      <Animated.View entering={FadeInDown.delay(800)}>
        <Text style={styles.textAbout}>About</Text>
        <Text style={styles.text}>{item.contents}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    bottom: 10,
    left: 10,
    right: 10,
    padding: 16,
    borderRadius: 20,
  },
  textName: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  textLocation: {
    color: "white",
    fontSize: 16,
  },
  textAbout: {
    color: "#323232",
    fontSize: 28,
    fontWeight: "bold",
    margin: 10,
  },
  text: {
    color: "#323232",
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: "justify",
  },
});

export default DetailPlaceScreen;
