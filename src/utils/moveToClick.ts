import MapView from "react-native-maps";

export const moveToMarker = (
  mapref: React.RefObject<MapView>,
  latitude: number,
  longitude: number
) => {
  // const selectedMarker = markers[markerIndex];
  // if (mapRef.current) {

  mapref.current?.animateToRegion(
    {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.0922, // 값이 줄어들수록 맵 확대함
      longitudeDelta: 0.0421,
    },
    1000 // 이동 애니메이션 지속 시간 (밀리초)
  );
  // }
};
