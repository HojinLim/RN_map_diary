import React from "react";
import { View, Image } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card>
        <Card.Cover source={require("../assets/images/travel.jpg")} />
        <Card.Content>
          <Title>Welcome!</Title>
          <Paragraph>This is a simple home screen.</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HomeScreen;
