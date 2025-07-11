import React, { useState, useRef } from "react";
import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Animated, Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "./src/utils/theme";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import CreateOptionScreen from "./src/screens/CreateOptionScreen";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Previne que a splash screen desapareça automaticamente
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Welcome");
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const navigateToCreateOption = () => {
    // Animação de slide para a direita (forward) - mais rápida
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -SCREEN_WIDTH,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentScreen("CreateOption");
      slideAnim.setValue(SCREEN_WIDTH);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const navigateToWelcome = () => {
    // Animação de slide para a esquerda (back) - mais rápida
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: SCREEN_WIDTH,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentScreen("Welcome");
      slideAnim.setValue(-SCREEN_WIDTH);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "Welcome":
        return (
          <WelcomeScreen onNavigateToCreateOption={navigateToCreateOption} />
        );
      case "CreateOption":
        return <CreateOptionScreen onNavigateBack={navigateToWelcome} />;
      default:
        return (
          <WelcomeScreen onNavigateToCreateOption={navigateToCreateOption} />
        );
    }
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="light" backgroundColor={theme.colors.background} />
      <Animated.View
        style={[
          styles.screenContainer,
          {
            transform: [{ translateX: slideAnim }],
            opacity: fadeAnim,
          },
        ]}
      >
        {renderCurrentScreen()}
      </Animated.View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  screenContainer: {
    flex: 1,
  },
});
