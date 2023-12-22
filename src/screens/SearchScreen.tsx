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
import MapView from "react-native-maps";

type Props = {};

const SearchScreen = (props: Props) => {
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
      <MapView></MapView>
      <View style={styles.mapContainer}></View>
      <View style={styles.historyContainer}></View>
    </View>
  );
};

export default SearchScreen;

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
