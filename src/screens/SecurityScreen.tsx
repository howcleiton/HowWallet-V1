import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LockKeyhole, Fingerprint } from "lucide-react-native";
import LottieView from "lottie-react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { theme } from "../utils/theme";
import {
  wp,
  hp,
  getLottieSize,
  getAnimationMarginTop,
} from "../utils/responsive";
import { RootStackParamList } from "../navigation/types";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import BackButton from "../components/BackButton";
import EmailBottomSheet from "../components/EmailBottomSheet";

type SecurityScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Security'>;

interface SecurityScreenProps {
  navigation: SecurityScreenNavigationProp;
}

export default function SecurityScreen({ navigation }: SecurityScreenProps) {
  const [isEmailBottomSheetVisible, setIsEmailBottomSheetVisible] = useState(false);

  const handleContinueWithEmail = () => {
    setIsEmailBottomSheetVisible(true);
  };

  const handleCreateWallet = () => {
    console.log("Crie uma carteira");
  };

  const handleCloseEmailBottomSheet = () => {
    setIsEmailBottomSheetVisible(false);
  };

  const handleApplePress = () => {
    console.log("Apple login selected");
    setIsEmailBottomSheetVisible(false);
    // Navegar diretamente para Home após login com Apple
    navigation.navigate("Home");
  };

  const handleGooglePress = () => {
    console.log("Google login selected");
    setIsEmailBottomSheetVisible(false);
    // Navegar diretamente para Home após login com Google
    navigation.navigate("Home");
  };

  return (
    <View style={styles.backgroundContainer}>
      <StatusBar barStyle="light-content" translucent />
      <SafeAreaView style={styles.container}>
        {/* Botão Voltar Reutilizável */}
        <BackButton />

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
          <PrimaryButton
            text="Continuar com Email"
            onPress={handleContinueWithEmail}
          />

          <SecondaryButton
            text="Crie uma carteira"
            onPress={handleCreateWallet}
          />
        </View>
      </SafeAreaView>

      {/* Email Bottom Sheet */}
      <EmailBottomSheet
        visible={isEmailBottomSheetVisible}
        onClose={handleCloseEmailBottomSheet}
        onApplePress={handleApplePress}
        onGooglePress={handleGooglePress}
      />
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
    alignItems: "center",
    paddingBottom: theme.layout.contentPaddingBottom, // Espaço seguro para botões
  },
  illustrationContainer: {
    marginTop: getAnimationMarginTop(),
    alignItems: "center",
    marginBottom: theme.spacing.lg,
  },
  lottieAnimation: {
    width: getLottieSize(),
    height: getLottieSize(),
  },
  infoBlock: {
    marginBottom: theme.spacing.md, // Usando theme spacing
    alignItems: "center",
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
    justifyContent: "center",
  },
  infoTitle: {
    ...theme.typography.subtitle,
    marginLeft: theme.spacing.sm,
    textAlign: "center",
  },
  infoDescription: {
    ...theme.typography.body,
    lineHeight: theme.spacing.lg,
    textAlign: "center",
  },
  buttonsContainer: {
    position: "relative",
    zIndex: 1,
  },
});
