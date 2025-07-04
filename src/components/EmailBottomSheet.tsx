import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../utils/theme";
import { wp, hp } from "../utils/responsive";

interface EmailBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onGooglePress: () => void;
  onApplePress: () => void;
}

const { height: screenHeight } = Dimensions.get("window");

export default function EmailBottomSheet({
  visible,
  onClose,
  onGooglePress,
  onApplePress,
}: EmailBottomSheetProps) {
  const insets = useSafeAreaInsets();
  const translateY = useRef(new Animated.Value(screenHeight * 0.5)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: screenHeight * 0.5,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, translateY, opacity]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[styles.overlay, { opacity }]}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Animated.View
              style={[
                styles.bottomSheet,
                {
                  paddingBottom: Math.max(insets.bottom, 24),
                  transform: [{ translateY }],
                },
              ]}
            >
              {/* Título */}
              <Text style={styles.title}>Selecione o seu e-mail</Text>

              {/* Subtítulo */}
              <Text style={styles.subtitle}>
                Adicione uma carteira com sua conta da Apple ou Google
              </Text>

              {/* Botões - Alinhados com o padrão das outras páginas */}
              <View style={styles.buttonsContainer}>
                {/* Botão Apple - Posição do PrimaryButton */}
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={onApplePress}
                >
                  <Ionicons
                    name="logo-apple"
                    size={24}
                    color="#FFFFFF"
                    style={styles.icon}
                  />
                  <Text style={styles.buttonText}>Continuar com Apple</Text>
                </TouchableOpacity>

                {/* Botão Google - Posição do SecondaryButton */}
                <TouchableOpacity
                  style={styles.secondaryButton}
                  onPress={onGooglePress}
                >
                  <Image
                    source={require("../../assets/googleicon.png")}
                    style={styles.googleIcon}
                  />
                  <Text style={styles.buttonText}>Continuar com Google</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "#1F1F1F",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 24,
    height: screenHeight * 0.35, // 35% da altura da tela
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 24,
    color: "#D47EAE",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "Inter_500Medium",
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },
  buttonsContainer: {
    position: "relative",
    width: "100%",
    height: theme.layout.primaryButtonBottom + theme.layout.buttonHeight, // Altura total necessária para os botões
  },
  primaryButton: {
    position: "absolute",
    left: "50%",
    marginLeft: wp(-150), // -300/2 para centralizar
    width: wp(300), // Mesma largura dos botões das páginas
    height: theme.layout.buttonHeight, // Mesma altura dos botões das páginas
    borderRadius: theme.borderRadius.md,
    bottom: theme.layout.primaryButtonBottom, // 100px da borda inferior
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
  },
  secondaryButton: {
    position: "absolute",
    left: "50%",
    marginLeft: wp(-150), // -300/2 para centralizar
    width: wp(300), // Mesma largura dos botões das páginas
    height: theme.layout.buttonHeight, // Mesma altura dos botões das páginas
    borderRadius: theme.borderRadius.md,
    bottom: theme.layout.secondaryButtonBottom, // 40px da borda inferior
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  googleIcon: {
    position: "absolute",
    left: 16,
    width: 24,
    height: 24,
  },
  buttonText: {
    ...theme.typography.button, // Mesma tipografia dos botões das páginas
    textAlign: "center",
    flex: 1,
  },
});
