import MapView, { Region } from "react-native-maps";

export const moveToMarker2 = (
  mapref: React.RefObject<MapView>,
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number
) => {
  mapref.current?.animateToRegion(
    { latitude, longitude, latitudeDelta, longitudeDelta },
    1000 // 이동 애니메이션 지속 시간 (밀리초)
  );
  // }
};
