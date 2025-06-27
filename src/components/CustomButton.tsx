import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../utils/theme";
import { hp, wp } from "../utils/responsive";

interface ButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  position?: "button1" | "button2";
}

export default function CustomButton({
  text,
  onPress,
  disabled = false,
  variant = "primary",
  position = "button1",
}: ButtonProps) {
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

  if (variant === "primary") {
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
          <Text style={styles.primaryButtonText}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[...getButtonStyle(), styles.secondaryButton]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.secondaryButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    left: "50%", // Centralizar
    marginLeft: wp(-150), // -280/2 para centralizar
    width: wp(300), // Largura exata
    height: hp(48), // Altura exata
    borderRadius: theme.borderRadius.md,
  },
  // Botão 1 - 165px da borda inferior
  button1Position: {
    bottom: hp(165),
  },
  // Botão 2 - 104px da borda inferior
  button2Position: {
    bottom: hp(104),
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  // Botão Primário (Gradiente)
  gradientButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.borderRadius.md,
    overflow: "hidden",
  },
  primaryButtonText: {
    fontSize: hp(18),
    fontFamily: "Inter_700Bold",
    color: "#FFFFFF",
  },
  // Botão Secundário (Transparente com borda)
  secondaryButton: {
    borderWidth: 1,
    borderColor: theme.colors.text,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryButtonText: {
    fontSize: hp(18),
    fontFamily: "Inter_500Medium",
    color: theme.colors.text,
  },
});
