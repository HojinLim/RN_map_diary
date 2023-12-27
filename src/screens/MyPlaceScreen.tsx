import { FlatList, Image, StatusBar, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Card,
  IconButton,
  Searchbar,
  Snackbar,
  Text,
  TouchableRipple,
} from "react-native-paper";
import SegmentedButton from "../components/SegmentedButton";
import MapView, { Marker } from "react-native-maps";
import { moveToMarker } from "../utils/moveToClick";
import { moveToMarker2 } from "../utils/moveToClick2";
import { cards } from "../constants/data";
import { CardType } from "../types/commonType";

type Props = {};

const MyPlaceScreen = (props: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchNumber, setSearchNumber] = React.useState<number>(0);
  const [visible, setVisible] = React.useState(false);
  const mapRef = React.createRef<MapView>();
  const [markers, setMarkers] = useState<CardType[]>();

  useEffect(() => {
    setMarkers(cards);
  }, [cards]);

  const onToggleSnackBar = () => {
    setVisible(!visible);
    const searched = markers?.filter((value) =>
      value.place_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchNumber(searched?.length ?? 0);
    setMarkers(searched);
  };

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleMapReady = () => {
    // MapView가 준비되면 호출되는 콜백 함수
    console.log("Map is ready!");
  };
  const selectedTag = (tag: string) => {
    // console.log(tag);
    const selected = cards?.filter((places) => places.tag == tag);
    setMarkers(selected);
  };

  return (
    <View style={styles.container}>
      <Snackbar
        duration={1500}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {},
        }}
      >
        {searchNumber
          ? `${searchNumber}건의 검색 결과 😊`
          : `검색결과가 없습니다 😔`}
      </Snackbar>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={onToggleSnackBar}
        onClearIconPress={() => setMarkers(cards)}
      />
      <SegmentedButton selectedTag={selectedTag} />
      <MapView
        ref={mapRef}
        onRegionChangeComplete={(region) => {
          // console.log("Current latitudeDelta:", region.latitudeDelta);
          // console.log("Current longitudeDelta:", region.longitudeDelta);
        }}
        style={styles.mapContainer}
        zoomControlEnabled
        onMapReady={handleMapReady}
        initialRegion={{
          latitude: 37.741,
          longitude: 127.0482,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
      >
        {markers?.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.place_name}
            description={marker.title}
          ></Marker>
        ))}
      </MapView>
      <View style={styles.historyContainer}>
        <FlatList
          horizontal // Set the horizontal prop to true
          data={markers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{}}>
              <TouchableRipple
                onPress={() =>
                  moveToMarker2(
                    mapRef,
                    item.coordinate.latitude,
                    item.coordinate.longitude,
                    item.coordinate.latitudeDelta,
                    item.coordinate.longitudeDelta
                  )
                }
                rippleColor="rgba(0, 0, 0, .32)"
              >
                <Card.Title
                  title={item.title}
                  subtitle={item.place_name}
                  left={(props) => (
                    <Avatar.Image {...props} size={48} source={item.image} />
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

export default MyPlaceScreen;

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  mapContainer: {
    flex: 3,
    backgroundColor: "#2effff",
  },
  historyContainer: {
    flex: 1,
    backgroundColor: "#aaaa",
    flexDirection: "row",
  },
  customMarker: {
    alignItems: "center",
  },
  markerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
