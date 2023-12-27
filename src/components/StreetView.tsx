import React, { useRef } from "react";
import { LatLng } from "react-native-maps";
import { WebView, WebViewNavigation } from "react-native-webview";

type Props = {
  location: LatLng;
};

const StreetView = ({ location }: Props) => {
  const webViewRef = useRef(null);

  const streetViewURL = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${location.latitude},${location.longitude}`;

  const handleWebViewNavigation = (navState: WebViewNavigation) => {
    // You can handle navigation state changes here if needed

  };

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: streetViewURL }}
      style={{ flex: 1 }}
      onNavigationStateChange={handleWebViewNavigation}
    />
  );
};

export default StreetView;
