import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { theme } from "../utils/theme";
import { hp, wp } from "../utils/responsive";

interface SecondaryButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function SecondaryButton({
  text,
  onPress,
  disabled = false,
}: SecondaryButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
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
    left: "50%", // Centralizar
    marginLeft: wp(-150), // -300/2 para centralizar
    width: wp(300), // Largura exata
    height: theme.layout.buttonHeight, // Altura exata
    borderRadius: theme.borderRadius.md,
    bottom: theme.layout.secondaryButtonBottom, // 40px da borda inferior
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
    ...theme.typography.button,
    color: theme.colors.text,
  },
});