import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../utils/theme";
import {
  hp,
  wp,
  safeWp,
  safeHp,
  isSmallScreen,
  getSafeBottomSpacing,
} from "../utils/responsive";

interface SecondaryButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  position?: "button1" | "button2";
}

export default function SecondaryButton({
  text,
  onPress,
  disabled = false,
  position = "button1",
}: SecondaryButtonProps) {
  const insets = useSafeAreaInsets();

  const getButtonStyle = () => {
    let baseBottomSpacing;

    if (position === "button1") {
      baseBottomSpacing = hp(104); // 40px (bottom) + 48px (button height) + 16px (spacing) = 104px
    } else {
      baseBottomSpacing = hp(40); // Exatamente 40px do bottom
    }

    const safeBottomSpacing = getSafeBottomSpacing(
      baseBottomSpacing,
      insets.bottom
    );

    const buttonStyle = {
      position: "absolute" as const,
      left: 0,
      right: 0,
      bottom: safeBottomSpacing,
      marginHorizontal: theme.spacing.lg,
      height: safeHp(48, 44, 52),
      borderRadius: theme.borderRadius.md,
      borderWidth: 1,
      borderColor: theme.colors.text,
      backgroundColor: "transparent",
      justifyContent: "center" as const,
      alignItems: "center" as const,
    };

    if (disabled) {
      return [buttonStyle, styles.buttonDisabled];
    }

    return buttonStyle;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: isSmallScreen ? hp(16) : hp(18),
    fontFamily: "Inter_500Medium",
    color: theme.colors.text,
  },
});
