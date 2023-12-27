import React, { useState, useRef } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import MapView, {
  LatLng,
  MapPressEvent,
  Marker,
  Region,
} from "react-native-maps";
import {
  GooglePlaceData,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { Button, Snackbar } from "react-native-paper";
import StreetView from "../components/StreetView";
import { moveToMarker } from "../utils/moveToClick";
import { GOOGLE_MAP_KEY } from "@env";

type Props = {};

const SearchScreen = (props: Props) => {
  const mapRef = useRef<MapView>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visible, setVisible] = useState(false);
 

  const initialCoordinate: LatLng = {
    latitude: 37.413294,
    longitude: 126.734086,
  };
    const [mapRegion, setMapRegion] = useState({
    latitude: 37.413294,
    longitude: 126.734086,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [markerCoordinate, setMarkerCoordinate] =
    useState<LatLng>(initialCoordinate);
  const [isClicked, setIsClicked] = useState(false);

  const onToggleSnackBar = () => {
    setVisible(!visible);
  };

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  const handleMapPress = (e: MapPressEvent) => {
    const clickedCoordinate = e.nativeEvent.coordinate;

    // Update the marker coordinate
    setMarkerCoordinate(clickedCoordinate);

    // Move to the clicked marker
    moveToMarker(
      mapRef,
      clickedCoordinate.latitude,
      clickedCoordinate.longitude
    );
    
    // Show the add marker button
    setIsClicked(true);
  };

  const handleAddMarkerPress = () => {
    // Handle the logic when the add marker button is pressed
    setIsClicked(false);
  };

  const handlePlaceSelected = (data: GooglePlaceData, detail: any) => {
    const newCoordi: LatLng = {
      latitude: detail?.geometry.location.lat ?? 0,
      longitude: detail?.geometry.location.lng ?? 0,
    };

    // Update the marker coordinate
    setMarkerCoordinate(newCoordi);

    // Move to the selected place
    moveToMarker(mapRef, newCoordi.latitude, newCoordi.longitude);

    // Show the snackbar
    onToggleSnackBar();
  };
  const handleRegionChange = (newRegion: Region) => {
    setMapRegion(newRegion);
  };

  return (
    <View style={styles.container}>
      {/* Snackbar for showing search results */}
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

      {/* Google Places Autocomplete search bar */}
      <GooglePlacesAutocomplete
        minLength={2}
        placeholder="장소를 검색해보세요!"
        query={{
          key: GOOGLE_MAP_KEY,
          language: "ko",
          components: "country:kr",
        }}
        keyboardShouldPersistTaps={"handled"}
        fetchDetails={true}
        onPress={handlePlaceSelected}
        onFail={(error) => console.log(error)}
        onNotFound={() => console.log("no results")}
        keepResultsAfterBlur={true}
        enablePoweredByContainer={false}
      />

      {/* MapView to display the map and markers */}
      <View style={styles.mapContainer}>
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          initialRegion={{
            ...initialCoordinate,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange={handleRegionChange}
          onPress={handleMapPress}
          zoomControlEnabled
        >
          {/* Display the marker */}
          <Marker
            coordinate={markerCoordinate}
            title="Selected Location"
            description={`Lat: ${markerCoordinate.latitude}, Lng: ${markerCoordinate.longitude}`}
          />
        </MapView>

        {/* StreetView component */}
        <StreetView location={markerCoordinate} />

        {/* Add Marker Button */}
        {isClicked && (
          <View style={styles.addButtonContainer}>
            <Button icon="plus" mode="contained" onPress={handleAddMarkerPress}>
              추가하기
            </Button>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  mapContainer: {
    flex: 2,
    backgroundColor: "#2effff",
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 16,
    alignSelf: "flex-end",
    right: 15,
  },
});

export default SearchScreen;
