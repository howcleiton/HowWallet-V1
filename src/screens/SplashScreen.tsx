import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar, Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import LottieView from "lottie-react-native";
import { theme } from "../utils/theme";
import { RootStackParamList } from "../navigation/types";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;

interface SplashScreenProps {
  navigation: SplashScreenNavigationProp;
}

export default function SplashScreen({ navigation }: SplashScreenProps) {
  useEffect(() => {
    // Timer de 3 segundos para navegação
    const timer = setTimeout(() => {
      navigation.replace("Welcome");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LottieView
        source={require("../../assets/Logo-4.json")}
        autoPlay
        loop={false}
        style={styles.animation}
        resizeMode="cover"
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
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});
