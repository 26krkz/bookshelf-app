import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

export default function HomeScreen() {
  return <WebView source={{ uri: "https://bookshelf-olive-mu.vercel.app/" }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
