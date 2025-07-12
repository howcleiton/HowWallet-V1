import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  position?: "button1" | "button2";
}

export default function PrimaryButton({
  text,
  onPress,
  disabled = false,
  position = "button1",
}: PrimaryButtonProps) {
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
      <LinearGradient
        colors={
          disabled
            ? ["#666666", "#888888"]
            : [theme.colors.gradient[0], theme.colors.gradient[1]]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientButton}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonDisabled: {
    opacity: 0.5,
  },
  gradientButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.borderRadius.md,
    overflow: "hidden",
  },
  buttonText: {
    fontSize: isSmallScreen ? hp(16) : hp(18),
    fontFamily: "Inter_700Bold",
    color: "#FFFFFF",
  },
});
