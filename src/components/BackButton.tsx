import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../utils/theme";
import { wp, hp } from "../utils/responsive";

interface BackButtonProps {
  onPress: () => void;
}

export default function BackButton({ onPress }: BackButtonProps) {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons
        name="arrow-back-circle-outline"
        size={wp(24)}
        color={theme.colors.primary}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: hp(68),
    left: wp(16),
    zIndex: 1,
    padding: wp(8), // Add some padding for better touch area
  },
});
