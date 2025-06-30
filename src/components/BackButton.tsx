import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { CircleArrowLeft } from "lucide-react-native";
import { theme } from "../utils/theme";
import { wp, hp } from "../utils/responsive";

interface BackButtonProps {
  onPress: () => void;
}

export default function BackButton({ onPress }: BackButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.backButton}
      activeOpacity={0.7}
    >
      <CircleArrowLeft size={wp(24)} color={theme.colors.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: hp(68),
    left: wp(16),
    width: wp(24),
    height: wp(24),
    justifyContent: "center",
    alignItems: "center",
  },
});
