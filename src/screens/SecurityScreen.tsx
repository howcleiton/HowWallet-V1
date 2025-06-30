import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LockKeyhole, Fingerprint } from "lucide-react-native";
import LottieView from "lottie-react-native";
import { theme } from "../utils/theme";
import {
  wp,
  hp,
  getLottieSize,
  getAnimationMarginTop,
} from "../utils/responsive";
import CustomButton from "../components/CustomButton";
import BackButton from "../components/BackButton";

interface SecurityScreenProps {
  onNavigate: (screen: string) => void;
}

export default function SecurityScreen({ onNavigate }: SecurityScreenProps) {
  const handleGoBack = () => {
    onNavigate("Welcome");
  };

  const handleContinueWithEmail = () => {
    console.log("Continuar com Email");
  };

  const handleCreateWallet = () => {
    console.log("Crie uma carteira");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />

      {/* Botão Voltar Reutilizável */}
      <BackButton onPress={handleGoBack} />

      <View style={styles.content}>
        {/* Animação Lottie - responsiva */}
        <View style={styles.illustrationContainer}>
          <LottieView
            source={require("../../assets/security.json")}
            autoPlay
            loop
            style={styles.lottieAnimation}
          />
        </View>

        {/* Primeiro bloco de informação - 24px da ilustração */}
        <View style={styles.infoBlock}>
          <View style={styles.infoHeader}>
            <LockKeyhole size={wp(18)} color={theme.colors.primary} />
            <Text style={styles.infoTitle}>Segurança reforçada</Text>
          </View>
          <Text style={styles.infoDescription}>
            Sua carteira está guardada de{"\n"}forma segura e descentralizada
            {"\n"}com múltiplos fatores.
          </Text>
        </View>

        {/* Segundo bloco de informação - espaço reduzido */}
        <View style={[styles.infoBlock, { marginTop: hp(4) }]}>
          <View style={styles.infoHeader}>
            <Fingerprint size={wp(18)} color={theme.colors.primary} />
            <Text style={styles.infoTitle}>Recuperação fácil</Text>
          </View>
          <Text style={styles.infoDescription}>
            Recupere sua carteira com seu{"\n"}e-mail e um PIN de 4 dígitos.
          </Text>
        </View>
      </View>

      {/* Botões reutilizáveis */}
      <View style={styles.buttonsContainer}>
        <CustomButton
          text="Continuar com Email"
          onPress={handleContinueWithEmail}
          variant="primary"
          position="button1"
        />

        <CustomButton
          text="Crie uma carteira"
          onPress={handleCreateWallet}
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
    alignItems: "center",
    paddingBottom: hp(450), // MUITO mais espaço para iOS
  },
  illustrationContainer: {
    marginTop: getAnimationMarginTop(),
    alignItems: "center",
    marginBottom: hp(24),
  },
  lottieAnimation: {
    width: wp(200), // Fixo em 200px
    height: wp(200), // Fixo em 200px
  },
  infoBlock: {
    marginBottom: hp(16), // Reduzido de 24 para 16
    alignItems: "center",
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(8),
    justifyContent: "center",
  },
  infoTitle: {
    fontSize: hp(18),
    fontFamily: "Inter_700Bold",
    color: theme.colors.primary,
    marginLeft: theme.spacing.sm,
    textAlign: "center",
  },
  infoDescription: {
    fontSize: hp(18),
    fontFamily: "Inter_500Medium",
    color: theme.colors.text,
    lineHeight: hp(24),
    textAlign: "center",
  },
  buttonsContainer: {
    position: "relative",
    zIndex: 1,
  },
});
