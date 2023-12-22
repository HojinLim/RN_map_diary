import { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import { cards as CARDS } from "../constants/data";
import { Card } from "./PlaceCard";
import { UndoButton } from "./UndoButton";
import { CardType } from "../types/commonType";
import { isPortraitLandscape } from "../utils/dimensionUtil";

export const List = () => {
  const [cards, setCards] = useState<CardType[]>(CARDS);
  const marginVertical = isPortraitLandscape() ? 44 : 12;
  const marginHorizontal = isPortraitLandscape() ? 12 : 44;

  const onCloseCard = (index: number) => {
    const _cards = [...cards];
    _cards.splice(index, 1);
    setCards(_cards);
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
    <View style={styles.container}>
      <ScrollView
        style={[styles.container, { marginVertical, marginHorizontal }]}
      >
        <View style={styles.row}>
          {cards.map((card: CardType, i: number) => (
            <Card
              {...card}
              {...{ marginHorizontal }}
              key={card.id}
              index={i}
              onClose={onCloseCard}
            />
          ))}
        </View>
      </ScrollView>

      <UndoButton onPress={onUndoCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
