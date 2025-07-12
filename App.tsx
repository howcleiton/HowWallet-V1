import React, { useState } from "react";
import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { theme } from "./src/utils/theme";
import AppNavigator from "./src/navigation/AppNavigator";
import CustomSplashScreen from "./src/components/SplashScreen";

// Previne que a splash screen desapareça automaticamente
SplashScreen.preventAutoHideAsync();

// Componente interno que usa SafeAreaInsets
function AppContent({
  showSplash,
  onSplashFinish,
}: {
  showSplash: boolean;
  onSplashFinish: () => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.wrapper}>
      <StatusBar style="light" />
      {/* View para simular o background da status bar */}
      <View style={[styles.statusBarBackground, { height: insets.top }]} />

      {showSplash ? (
        <CustomSplashScreen onAnimationFinish={onSplashFinish} />
      ) : (
        <AppNavigator />
      )}
    </View>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AppContent showSplash={showSplash} onSplashFinish={handleSplashFinish} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  statusBarBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.background,
    zIndex: 1000,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
