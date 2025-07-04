import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { CircleArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../utils/theme";
import { wp, hp } from "../utils/responsive";

interface BackButtonProps {
  onPress?: () => void;
}

export default function BackButton({ onPress }: BackButtonProps) {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
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
    width: wp(40),
    height: wp(40),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
});
