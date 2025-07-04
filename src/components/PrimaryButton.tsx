import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../utils/theme";
import { hp, wp } from "../utils/responsive";

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function PrimaryButton({
  text,
  onPress,
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
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
    left: "50%", // Centralizar
    marginLeft: wp(-150), // -300/2 para centralizar
    width: wp(300), // Largura exata
    height: theme.layout.buttonHeight, // Altura exata
    borderRadius: theme.borderRadius.md,
    bottom: theme.layout.primaryButtonBottom, // 100px da borda inferior
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
    ...theme.typography.button,
  },
});