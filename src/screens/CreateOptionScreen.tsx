import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { theme } from "../utils/theme";
import { wp, hp, safeWp, isSmallScreen } from "../utils/responsive";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import BackButton from "../components/BackButton";
import AuthModal from "../components/AuthModal";
import { RootStackParamList } from "../navigation/AppNavigator";

type CreateOptionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "CreateOption"
>;

export default function CreateOptionScreen({
  navigation,
}: CreateOptionScreenProps) {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleBack = () => {
    // Navigate back to previous screen
    console.log("Voltando para WelcomeScreen");
    navigation.goBack();
  };

  const handleContinueWithEmail = () => {
    // Show auth modal
    console.log("Abrindo modal de autenticação");
    setShowAuthModal(true);
  };

  const handleCreateWallet = () => {
    // Navigate to seed phrase screen
    console.log("Criar uma carteira - navegando para SeedPhrase");
    navigation.navigate("SeedPhrase");
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

  const handleGoogleAuth = () => {
    console.log("Continuar com Google");
    setShowAuthModal(false);
    // TODO: Implement Google authentication
  };

  const handleAppleAuth = () => {
    console.log("Continuar com Apple");
    setShowAuthModal(false);
    // TODO: Implement Apple authentication
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />

      {/* Back Button */}
      <BackButton onPress={handleBack} />

      <View style={styles.content}>
        {/* Lottie Animation - 140px from top */}
        <View style={styles.animationContainer}>
          <LottieView
            source={require("../../assets/security.json")}
            autoPlay
            loop
            style={styles.lottieAnimation}
          />
        </View>

        {/* First Section - Security */}
        <View style={[styles.sectionContainer, styles.firstSection]}>
          <View style={styles.titleContainer}>
            <Ionicons
              name="lock-closed"
              size={wp(18)}
              color={theme.colors.primary}
              style={styles.titleIcon}
            />
            <Text style={styles.sectionTitle}>Segurança reforçada</Text>
          </View>
          <Text style={styles.sectionText}>
            Sua carteira está guardada de{"\n"}forma segura e descentralizada
            {"\n"}com múltiplos fatores.
          </Text>
        </View>

        {/* Second Section - Recovery */}
        <View style={[styles.sectionContainer, styles.secondSection]}>
          <View style={styles.titleContainer}>
            <Ionicons
              name="finger-print"
              size={wp(18)}
              color={theme.colors.primary}
              style={styles.titleIcon}
            />
            <Text style={styles.sectionTitle}>Recuperação fácil</Text>
          </View>
          <Text style={styles.sectionText}>
            Recupere sua carteira com seu{"\n"}e-mail e um PIN de 4 dígitos.
          </Text>
        </View>
      </View>

      {/* Buttons Container */}
      <View style={styles.buttonsContainer}>
        <PrimaryButton
          text="Continuar com Email"
          onPress={handleContinueWithEmail}
          position="button1"
        />

        <SecondaryButton
          text="Crie uma carteira"
          onPress={handleCreateWallet}
          position="button2"
        />
      </View>

      {/* Auth Modal */}
      <AuthModal
        visible={showAuthModal}
        onClose={handleCloseAuthModal}
        onGooglePress={handleGoogleAuth}
        onApplePress={handleAppleAuth}
      />
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
    paddingTop: 0,
  },
  // Animation - 140px from top
  animationContainer: {
    marginTop: hp(140),
    alignItems: "center",
    justifyContent: "center",
    flex: 0,
  },
  lottieAnimation: {
    width: wp(200),
    height: wp(200),
    alignSelf: "center",
  },
  // Section containers
  sectionContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  firstSection: {
    marginTop: hp(32), // 32px below animation
  },
  secondSection: {
    marginTop: hp(24), // 24px below first section
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp(8), // 8px below title
  },
  titleIcon: {
    marginRight: wp(8), // 8px spacing between icon and text
  },
  sectionTitle: {
    fontSize: hp(18),
    fontFamily: "Inter_700Bold",
    color: theme.colors.primary,
    textAlign: "center",
  },
  sectionText: {
    fontSize: hp(18),
    fontFamily: "Inter_500Medium",
    color: theme.colors.text,
    textAlign: "center",
    lineHeight: hp(24),
  },
  // Buttons container - same spacing as WelcomeScreen
  buttonsContainer: {
    position: "relative",
    minHeight: hp(152), // Same as WelcomeScreen: 40px (bottom) + 48px (button) + 16px (spacing) + 48px (button) = 152px
  },
});
