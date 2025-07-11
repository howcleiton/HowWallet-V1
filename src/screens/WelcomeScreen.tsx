import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { theme } from "../utils/theme";
import {
  wp,
  hp,
  safeWp,
  safeHp,
  isSmallScreen,
  hasVerticalSpace,
  getAdaptiveSpacing,
} from "../utils/responsive";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

interface WelcomeScreenProps {
  onNavigateToCreateOption: () => void;
}

export default function WelcomeScreen({
  onNavigateToCreateOption,
}: WelcomeScreenProps) {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleGetStarted = () => {
    // Navigate to CreateOptionScreen
    console.log("Navegando para CreateOptionScreen");
    onNavigateToCreateOption();
  };

  const handleImportWallet = () => {
    // Navegar para import wallet
    console.log("Importar carteira");
  };

  const handleTermsPress = () => {
    // Navegar para termos de serviço
    console.log("Termos de serviço");
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />

      <View style={styles.content}>
        {/* Lottie Animation - 140px do topo */}
        <View style={styles.animationContainer}>
          <LottieView
            source={require("../../assets/welcome-page.json")}
            autoPlay
            loop
            style={styles.lottieAnimation}
          />
        </View>

        {/* Título - 32px da animação */}
        <Text style={styles.title}>
          Bem-vindo à{"\n"}
          <Text style={styles.titleAccent}>How Wallet</Text>
        </Text>

        {/* Subtítulo - 8px do título */}
        <Text style={styles.subtitle}>
          Sua carteira de criptomoedas segura{"\n"}e fácil de usar
        </Text>
      </View>

      {/* Botões reutilizáveis */}
      <View style={styles.buttonsContainer}>
        {/* Checkbox de termos - 24px acima do botão */}
        <View style={styles.termsContainer}>
          <TouchableOpacity
            style={styles.termsCheckbox}
            onPress={() => setAcceptedTerms(!acceptedTerms)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]}
            >
              {acceptedTerms && (
                <Ionicons
                  name="checkmark"
                  size={wp(14)}
                  color={theme.colors.background}
                />
              )}
            </View>
            <Text style={styles.termsText}>
              Aceito os{" "}
              <Text style={styles.termsLink} onPress={handleTermsPress}>
                termos de serviço
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <PrimaryButton
          text="Começar"
          onPress={handleGetStarted}
          disabled={!acceptedTerms}
          position="button1"
        />

        <SecondaryButton
          text="Importar Carteira Existente"
          onPress={handleImportWallet}
          position="button2"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: 0, // Remove padding top to control exact spacing
  },
  // Animação - Exatamente 140px da borda superior
  animationContainer: {
    marginTop: hp(140), // Exatamente 140px da borda superior
    alignItems: "center",
    justifyContent: "center",
    flex: 0,
  },
  lottieAnimation: {
    width: safeWp(250, 200, 300),
    height: safeWp(250, 200, 300),
    alignSelf: "center",
  },
  // Título - Exatamente 32px da animação
  title: {
    fontSize: isSmallScreen ? hp(24) : hp(30),
    fontFamily: "Inter_700Bold",
    color: theme.colors.text,
    textAlign: "center",
    marginTop: hp(32), // Exatamente 32px da animação
    paddingHorizontal: theme.spacing.md,
  },
  titleAccent: {
    color: theme.colors.primary,
  },
  // Subtítulo - Exatamente 8px do título
  subtitle: {
    fontSize: isSmallScreen ? hp(16) : hp(18),
    fontFamily: "Inter_500Medium",
    color: theme.colors.text,
    textAlign: "center",
    marginTop: hp(8), // Exatamente 8px do título
    lineHeight: isSmallScreen ? hp(20) : hp(24),
    paddingHorizontal: theme.spacing.md,
  },
  // Checkbox de termos - 8px acima do botão primário (que está a 104px do bottom)
  termsContainer: {
    position: "absolute",
    bottom: hp(160), // 104px (botão) + 48px (altura do botão) + 8px (espaçamento) = 160px
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
    zIndex: 1, // Garante que o checkbox apareça acima do botão
  },
  termsCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  checkbox: {
    width: safeWp(20, 18, 24),
    height: safeWp(20, 18, 24),
    borderWidth: 2,
    borderColor: theme.colors.text,
    borderRadius: wp(4),
    marginRight: theme.spacing.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  termsText: {
    fontSize: isSmallScreen ? hp(16) : hp(18),
    fontFamily: "Inter_500Medium",
    color: theme.colors.text,
    textAlign: "center",
    lineHeight: isSmallScreen ? hp(18) : hp(20),
    maxWidth: "80%",
  },
  termsLink: {
    color: theme.colors.primary,
    fontFamily: "Inter_700Bold",
    textDecorationLine: "underline",
  },
  // Container dos botões - altura ajustada para os novos espaçamentos
  buttonsContainer: {
    position: "relative",
    minHeight: hp(184), // 40px (bottom) + 48px (button) + 16px (spacing) + 48px (button) + 8px (spacing) + 24px (checkbox) = 184px
  },
});
