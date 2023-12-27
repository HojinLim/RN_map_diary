import { FlatList, Image, StatusBar, StyleSheet, View } from "react-native";
import React, { useRef } from "react";
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

type Props = {};

const MyPlaceScreen = (props: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const mapRef = React.createRef<MapView>();

  const markers = [
    {
      id: 1,
      title: "Location 1",
      description: "This is Location 1",
      image: require("../assets/images/defaultProfile.png"),
      coordinate: { latitude: 37.7749, longitude: -122.4194 },
    },
    {
      id: 2,
      title: "Location 2",
      description: "This is Location 2",
      image: require("../assets/images/defaultProfile.png"),
      coordinate: { latitude: 51.5074, longitude: -0.1278 },
    },
    {
      id: 3,
      title: "Location 3",
      description: "This is Location 3",
      image: require("../assets/images/defaultProfile.png"),
      coordinate: { latitude: -33.8688, longitude: 151.2093 },
    },
  ];

  const onToggleSnackBar = () => {
    setVisible(!visible);
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
      <SegmentedButton />
      <MapView
        ref={mapRef}
        style={styles.mapContainer}
        zoomControlEnabled
        onMapReady={handleMapReady}
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 30,
          longitudeDelta: 30,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
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
                  moveToMarker(mapRef,item.coordinate.latitude, item.coordinate.longitude,  )
                }
                rippleColor="rgba(0, 0, 0, .32)"
              >
                <Card.Title
                  title={item.title}
                  subtitle={item.description}
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
