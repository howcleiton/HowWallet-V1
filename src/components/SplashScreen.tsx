import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import { theme } from "../utils/theme";

const { width, height } = Dimensions.get("window");

interface SplashScreenProps {
  onAnimationFinish: () => void;
}

export default function SplashScreen({ onAnimationFinish }: SplashScreenProps) {
  useEffect(() => {
    // Timer para simular o tempo da splash screen
    const timer = setTimeout(() => {
      onAnimationFinish();
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, [onAnimationFinish]);

  const handleAnimationFinish = () => {
    onAnimationFinish();
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/Logo-4.json")}
        autoPlay
        loop={false}
        style={styles.animation}
        onAnimationFinish={handleAnimationFinish}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: width * 0.9,
    height: height * 0.6,
    maxWidth: 600,
    maxHeight: 500,
    minWidth: 300,
    minHeight: 250,
  },
});
