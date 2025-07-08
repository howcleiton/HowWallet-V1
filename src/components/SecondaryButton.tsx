import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { theme } from "../utils/theme";
import { hp, wp, getResponsiveHeight, getResponsiveSpacing, getSafeAreaMargin, isSmallScreen, isTablet } from "../utils/responsive";

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
      <Text style={styles.buttonText}>{text}</Text>
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
    borderWidth: 1,
    borderColor: theme.colors.text,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  button1Position: {
    bottom: getResponsiveHeight(40) + (isSmallScreen ? 0 : getSafeAreaMargin().bottom),
  },
  button2Position: {
    bottom: getResponsiveHeight(40) + (isSmallScreen ? 0 : getSafeAreaMargin().bottom),
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: theme.typography.buttonSecondary.fontSize,
    fontFamily: theme.typography.buttonSecondary.fontFamily,
    color: theme.typography.buttonSecondary.color,
  },
});