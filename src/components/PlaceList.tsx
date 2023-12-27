import { useState } from "react";
import { View, ScrollView, StyleSheet, FlatList } from "react-native";

import { cards as CARDS } from "../constants/data";

import { UndoButton } from "./UndoButton";
import { CardType } from "../types/commonType";
import { isPortraitLandscape } from "../utils/dimensionUtil";
import { Text, TouchableRipple } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";
import RenderItem from "./RenderItem";

const PlaceList = () => {
  const [cards, setCards] = useState<CardType[]>(CARDS);
  const marginVertical = isPortraitLandscape() ? 44 : 12;
  const marginHorizontal = isPortraitLandscape() ? 12 : 44;

  const onCloseCard = (index: number) => {
    console.log(index);
    setCards((prevCards) => {
      const _cards = [...prevCards];
      _cards.splice(index, 1);
      return _cards;
    });
  };

  const onUndoCard = () => {
    const card = {
      ...CARDS[Math.floor(Math.random() * CARDS.length)],
      id: String(Math.random()).slice(2),
    };
    const _cards = [...cards, card];
    setCards(_cards);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Popular Destinations</Text>
      <FlatList
      
        data={cards}
        renderItem={({ item, index }) => {
          return <RenderItem item={item} index={index} onClose={onCloseCard} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
  },
  text: {
    fontSize: 34,
    marginHorizontal: 20,
    color: "#323232",
    fontWeight: "bold",
  },
});

export default PlaceList;
