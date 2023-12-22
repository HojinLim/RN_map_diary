import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import {
  Avatar,
  Card,
  IconButton,
  Searchbar,
  Snackbar,
  TouchableRipple,
} from "react-native-paper";
import SegmentedButton from "../components/SegmentedButton";

type Props = {};

const HomeScreen = (props: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => {
    setVisible(!visible);
  };

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Example array of data
  const cardData = [
    { title: "자전거 여행", subtitle: "재미있었어!", key: "1" },
    { title: "화창한 봄날", subtitle: "와우", key: "2" },
  ];

  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {},
        }}
      >
        {`${searchQuery}가 검색됨!`}
      </Snackbar>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={onToggleSnackBar}
      />
      <SegmentedButton/>
      <View style={styles.mapContainer}></View>
      <View style={styles.historyContainer}>
        <FlatList
          horizontal // Set the horizontal prop to true
          data={cardData}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={{}}>
              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(0, 0, 0, .32)"
              >
                <Card.Title
                  title={item.title}
                  subtitle={item.subtitle}
                  left={(props) => (
                    <Avatar.Image
                      {...props}
                      size={48}
                      source={{ uri: "https://picsum.photos/100" }}
                    />
                  )}
                  right={(props) => (
                    <IconButton
                      {...props}
                      icon="dots-vertical"
                      onPress={() => {}}
                    />
                  )}
                />
              </TouchableRipple>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  mapContainer: {
    flex: 2,
    backgroundColor: "#2effff",
  },
  historyContainer: {
    flex: 1,
    backgroundColor: "#aaaa",
    flexDirection: "row",
  },
});
