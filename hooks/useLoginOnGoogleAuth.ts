import { useEffect, useRef } from "react";
import * as Google from "expo-auth-session/providers/google";
import { WebView } from "react-native-webview";

export function useLoginOnGoogleAuth() {
  const webViewRef = useRef<WebView | null>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_ID || "",
    redirectUri: process.env.EXPO_PUBLIC_GOOGLE_REDIRECT_URI || "",
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    // if (response?.type === "success") {
    //   const { authentication } = response;
    //   if (authentication?.accessToken) {
    //     // ✅ WebView にトークンを送る
    //     webViewRef.current?.postMessage(JSON.stringify({ token: authentication.accessToken }));
    //   }
    // }
    if (response) {
      console.log("Auth Response:", response);
      if (response.type === "success") {
        console.log("Access Token:", response.params.access_token);
      } else {
        console.error("OAuth failed:", response);
      }
    }
  }, [response]);

  return { webViewRef, promptAsync };
}
