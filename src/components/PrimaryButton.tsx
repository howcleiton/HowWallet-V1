import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../utils/theme";
import { hp, wp, getResponsiveHeight, getResponsiveSpacing, getSafeAreaMargin, isSmallScreen, isTablet } from "../utils/responsive";

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
  const getButtonStyle = () => {
    const baseStyle = [styles.button];

    if (position === "button1") {
      baseStyle.push(styles.button1Position);
    } else {
      baseStyle.push(styles.button2Position);
    }

    if (disabled) {
      baseStyle.push(styles.buttonDisabled);
    }

    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <LinearGradient
        colors={disabled ? ["#666666", "#888888"] : theme.colors.gradient}
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
  button: {
    position: "absolute",
    left: isTablet ? '50%' : getResponsiveSpacing(40),
    right: isTablet ? undefined : getResponsiveSpacing(40),
    width: isTablet ? 400 : undefined,
    marginLeft: isTablet ? -200 : undefined,
    height: getResponsiveHeight(48),
    borderRadius: theme.borderRadius.md,
  },
  button1Position: {
    bottom: getResponsiveHeight(100) + (isSmallScreen ? 0 : getSafeAreaMargin().bottom),
  },
  button2Position: {
    bottom: getResponsiveHeight(100) + (isSmallScreen ? 0 : getSafeAreaMargin().bottom),
  },
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
    fontSize: theme.typography.button.fontSize,
    fontFamily: theme.typography.button.fontFamily,
    color: theme.typography.button.color,
  },
});