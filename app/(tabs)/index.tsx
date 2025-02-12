import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { useLoginOnGoogleAuth } from "@/hooks/useLoginOnGoogleAuth";

export default function HomeScreen() {
  const { webViewRef, promptAsync } = useLoginOnGoogleAuth();
  return (
    <WebView
      ref={webViewRef}
      source={{ uri: "https://bookshelf-olive-mu.vercel.app/" }}
      injectedJavaScript={`
          window.requestGoogleLogin = function() {
          window.ReactNativeWebView.postMessage("google-login");
        };
      `}
      onMessage={(event) => {
        const message = event.nativeEvent.data;
        if (message === "google-login") {
          promptAsync();
        }
      }}
      userAgent="ExpoWebView"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
