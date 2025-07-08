import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { theme } from "../utils/theme";
import { wp, hp, getResponsiveSpacing, getResponsiveHeight, getSafeAreaMargin, isSmallScreen, isTablet, isIOS, isAndroid } from "../utils/responsive";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function WelcomeScreen() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleGetStarted = () => {
    // Navegar para próxima tela
    console.log("Começar");
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
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
        translucent={isAndroid}
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
          Bem-vindo à How<Text style={styles.titleAccent}>Wallet</Text>
        </Text>

        {/* Subtítulo - 8px do título */}
        <Text style={styles.subtitle}>
          Sua carteira de criptomoedas segura{"\n"}e fácil de usar
        </Text>

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
                  size={getResponsiveSpacing(14)}
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
      </View>

      {/* Botões reutilizáveis */}
      <View style={styles.buttonsContainer}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: isAndroid ? getSafeAreaMargin().top : 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: isTablet ? theme.spacing.xxl : theme.spacing.lg,
    maxWidth: isTablet ? 600 : '100%',
    alignSelf: isTablet ? 'center' : 'stretch',
  },
  // Animação responsiva
  animationContainer: {
    marginTop: getResponsiveHeight(isSmallScreen ? 100 : isTablet ? 160 : 140),
    alignItems: "center",
  },
  lottieAnimation: {
    width: isSmallScreen ? wp(200) : isTablet ? wp(300) : wp(250),
    height: isSmallScreen ? wp(200) : isTablet ? wp(300) : wp(250),
  },
  // Título - 32px da animação
  title: {
    fontSize: theme.typography.mainTitle.fontSize,
    fontFamily: theme.typography.mainTitle.fontFamily,
    color: theme.typography.mainTitle.color,
    textAlign: "center",
    marginTop: getResponsiveSpacing(24),
    lineHeight: theme.typography.mainTitle.lineHeight,
  },
  titleAccent: {
    color: theme.colors.primary,
  },
  // Subtítulo - 8px do título
  subtitle: {
    fontSize: theme.typography.body.fontSize,
    fontFamily: theme.typography.body.fontFamily,
    color: theme.typography.body.color,
    textAlign: "center",
    marginTop: getResponsiveSpacing(8),
    lineHeight: theme.typography.body.lineHeight,
  },
  // Checkbox de termos - 24px acima do botão "Começar"
  termsContainer: {
    position: "absolute",
    bottom: getResponsiveHeight(100 + 48 + 24), // 100 (botão) + 48 (altura) + 24 (espaço) = 172px
    left: theme.spacing.lg,
    right: theme.spacing.lg,
    alignItems: "center", // Centralizar horizontalmente
  },
  termsCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    width: getResponsiveSpacing(20),
    height: getResponsiveSpacing(20),
    borderWidth: 2,
    borderColor: theme.colors.text,
    borderRadius: getResponsiveSpacing(4),
    marginRight: theme.spacing.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  termsText: {
    fontSize: theme.typography.body.fontSize,
    fontFamily: theme.typography.body.fontFamily,
    color: theme.typography.body.color,
    textAlign: "center",
    lineHeight: theme.typography.body.lineHeight,
  },
  termsLink: {
    color: theme.colors.primary,
    fontFamily: "Inter_700Bold", // Inter Bold
    textDecorationLine: "underline",
  },
  // Container dos botões
  buttonsContainer: {
    position: "relative",
  },
});
