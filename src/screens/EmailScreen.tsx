import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MailQuestion } from "lucide-react-native";
import LottieView from "lottie-react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { theme } from "../utils/theme";
import { wp, hp, fp } from "../utils/responsive";
import { RootStackParamList } from "../navigation/types";
import PrimaryButton from "../components/PrimaryButton";
import BackButton from "../components/BackButton";

type EmailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Email'>;

interface EmailScreenProps {
  navigation: EmailScreenNavigationProp;
}

export default function EmailScreen({ navigation }: EmailScreenProps) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleContinue = () => {
    if (isEmailValid) {
      navigation.navigate("Home"); // Navegar para Home após email
    }
  };

  const validateEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(text);
    setEmail(text);
    setIsEmailValid(isValid);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.backgroundContainer}>
        <StatusBar barStyle="light-content" translucent />
        <SafeAreaView style={styles.container}>
          {/* Botão Voltar Reutilizável */}
          <BackButton />

          <View style={styles.content}>
            {/* Animação Lottie - 140px do topo */}
            <View style={styles.animationContainer}>
              <LottieView
                source={require("../../assets/celular-load.json")}
                autoPlay
                loop
                style={styles.lottieAnimation}
              />
            </View>

            {/* Título com ícone - 24px da animação */}
            <View style={styles.titleContainer}>
              <MailQuestion size={wp(24)} color={theme.colors.primary} />
              <Text style={styles.title}>Digite seu e-mail</Text>
            </View>

            {/* Subtítulo - 8px do título */}
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>
                Nós usaremos isso para proteger{"\n"}e recuperar sua carteira
              </Text>
            </View>

            {/* Input de e-mail - 24px do subtítulo */}
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.emailInput,
                  isEmailValid && email.length > 0 && styles.emailInputValid,
                  email.length > 0 && !isEmailValid && styles.emailInputInvalid,
                ]}
                placeholder="exemplo@email.com"
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                value={email}
                onChangeText={validateEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="email"
              />
            </View>
          </View>

          {/* Botão reutilizável */}
          <View style={styles.buttonsContainer}>
            <PrimaryButton
              text="Continuar"
              onPress={handleContinue}
              disabled={!isEmailValid}
            />
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
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

  // Animação - 140px do topo
  animationContainer: {
    marginTop: hp(140),
    alignItems: "center",
  },
  lottieAnimation: {
    width: wp(200),
    height: hp(263),
  },

  // Título com ícone - 24px da animação
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.spacing.lg,
    justifyContent: "center",
  },
  title: {
    ...theme.typography.title,
    marginLeft: theme.spacing.sm,
  },

  // Subtítulo - 8px do título
  subtitleContainer: {
    marginTop: theme.spacing.sm,
    width: wp(290),
    height: hp(48),
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    ...theme.typography.body,
    textAlign: "center",
    lineHeight: theme.spacing.lg,
  },

  // Input - 24px do subtítulo
  inputContainer: {
    marginTop: theme.spacing.lg,
    width: wp(300),
    alignItems: "center",
  },
  emailInput: {
    width: wp(300),
    height: hp(48),
    backgroundColor: "transparent",
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    ...theme.typography.caption,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  emailInputValid: {
    borderColor: theme.colors.primary,
    backgroundColor: `${theme.colors.primary}1A`, // 10% opacity
  },
  emailInputInvalid: {
    borderColor: theme.colors.error,
    backgroundColor: `${theme.colors.error}1A`, // 10% opacity
  },

  // Container dos botões
  buttonsContainer: {
    position: "relative",
  },
});