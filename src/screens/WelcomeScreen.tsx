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
import { wp, hp } from "../utils/responsive";
import CustomButton from "../components/CustomButton";

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
      </View>

      {/* Botões reutilizáveis */}
      <View style={styles.buttonsContainer}>
        <CustomButton
          text="Começar"
          onPress={handleGetStarted}
          disabled={!acceptedTerms}
          variant="primary"
          position="button1"
        />

        <CustomButton
          text="Importar Carteira Existente"
          onPress={handleImportWallet}
          variant="secondary"
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
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  // Animação - 140px do topo
  animationContainer: {
    marginTop: hp(140),
    alignItems: "center",
  },
  lottieAnimation: {
    width: wp(250),
    height: wp(250),
  },
  // Título - 32px da animação
  title: {
    fontSize: hp(30),
    fontFamily: "Inter_700Bold",
    color: theme.colors.text,
    textAlign: "center",
    marginTop: hp(24),
  },
  titleAccent: {
    color: theme.colors.primary,
  },
  // Subtítulo - 8px do título
  subtitle: {
    fontSize: hp(18),
    fontFamily: "Inter_500Medium",
    color: theme.colors.text,
    textAlign: "center",
    marginTop: hp(8),
    lineHeight: hp(24),
  },
  // Checkbox de termos - 8px acima do botão "Começar"
  termsContainer: {
    position: "absolute",
    bottom: hp(165 + 48 + 16), // 165 (botão) + 48 (altura) + 8 (espaço) = 221px
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
    width: wp(20),
    height: wp(20),
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
    fontSize: hp(18),
    fontFamily: "Inter_500Medium",
    color: theme.colors.text,
    textAlign: "center",
    lineHeight: hp(20), // Melhor alinhamento vertical
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
