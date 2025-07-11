import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { theme } from "../utils/theme";
import { hp, wp, safeWp, safeHp, isSmallScreen } from "../utils/responsive";

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
    let buttonStyle;

    if (position === "button1") {
      buttonStyle = styles.button1Position;
    } else {
      buttonStyle = styles.button2Position;
    }

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
  button1Position: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: hp(104), // 40px (bottom) + 48px (button height) + 16px (spacing) = 104px
    marginHorizontal: theme.spacing.lg,
    height: safeHp(48, 44, 52),
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.text,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  button2Position: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: hp(40), // Exatamente 40px do bottom
    marginHorizontal: theme.spacing.lg,
    height: safeHp(48, 44, 52),
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.text,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: isSmallScreen ? hp(16) : hp(18),
    fontFamily: "Inter_500Medium",
    color: theme.colors.text,
  },
});
