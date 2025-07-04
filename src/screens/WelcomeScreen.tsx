import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { theme } from "../utils/theme";
import {
  wp,
  hp,
  fp,
  getLottieSize,
  getAnimationMarginTop,
} from "../utils/responsive";
import { RootStackParamList } from "../navigation/types";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

interface WelcomeScreenProps {
  navigation: WelcomeScreenNavigationProp;
}

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleGetStarted = () => {
    if (acceptedTerms) {
      navigation.navigate("Security");
    }
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
    <View style={styles.backgroundContainer}>
      <StatusBar barStyle="light-content" translucent />
      <SafeAreaView style={styles.container}>
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
            Bem-vindo à <Text style={styles.titleAccent}>How Wallet</Text>
          </Text>

          {/* Subtítulo - 8px do título */}
          <Text style={styles.subtitle}>
            Sua carteira de criptomoedas segura{"\n"}e fácil de usar
          </Text>

          {/* Checkbox de termos - 8px acima do botão */}
          <View style={styles.termsContainer}>
            <TouchableOpacity
              style={styles.termsCheckbox}
              onPress={() => setAcceptedTerms(!acceptedTerms)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.checkbox,
                  acceptedTerms && styles.checkboxChecked,
                ]}
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
          <PrimaryButton
            text="Começar"
            onPress={handleGetStarted}
            disabled={!acceptedTerms}
          />

          <SecondaryButton
            text="Importar Carteira Existente"
            onPress={handleImportWallet}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    alignItems: "center", // Centralizar todo o conteúdo
    paddingBottom: theme.layout.contentPaddingBottom, // Espaço seguro para botões
  },

  // Animação - responsiva
  animationContainer: {
    marginTop: getAnimationMarginTop(),
    alignItems: "center",
  },
  lottieAnimation: {
    width: getLottieSize(),
    height: getLottieSize(),
  },
  // Título - 32px da animação
  title: {
    ...theme.typography.hero,
    textAlign: "center",
    marginTop: theme.spacing.lg,
  },
  titleAccent: {
    color: theme.colors.primary,
  },
  // Subtítulo - 8px do título
  subtitle: {
    ...theme.typography.body,
    textAlign: "center",
    marginTop: theme.spacing.sm,
    lineHeight: theme.spacing.lg,
  },
  // Checkbox de termos - posicionamento responsivo
  termsContainer: {
    position: "absolute",
    bottom: hp(172), // Posição entre os botões: 100px + 48px + 12px + 12px
    left: theme.spacing.lg,
    right: theme.spacing.lg,
    alignItems: "center",
    zIndex: 1, // Garantir que fica acima
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
    ...theme.typography.body,
    textAlign: "center",
    lineHeight: fp(20), // Melhor alinhamento vertical
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
