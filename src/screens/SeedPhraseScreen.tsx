import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Clipboard from "expo-clipboard";
import { KeyRound, Copy, CheckCircle } from "lucide-react-native";
import { theme } from "../utils/theme";
import { wp, hp } from "../utils/responsive";
import BackButton from "../components/BackButton";
import PrimaryButton from "../components/PrimaryButton";

interface SeedPhraseScreenProps {
  navigation: any;
}

// Seed phrase temporária para demonstração - será substituída pela geração real da Solana
const DEMO_SEED_PHRASE = [
  "yellow",
  "puzzle",
  "glare",
  "wise",
  "tell",
  "second",
  "govern",
  "found",
  "exotic",
  "enforce",
  "slow",
  "mother",
];

export default function SeedPhraseScreen({
  navigation,
}: SeedPhraseScreenProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCopyToClipboard = async () => {
    try {
      const seedPhraseText = DEMO_SEED_PHRASE.join(" ");
      await Clipboard.setStringAsync(seedPhraseText);
      setHasCopied(true);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível copiar a frase");
    }
  };

  const handlePhraseSaved = () => {
    // Navegar para próxima tela ou voltar
    Alert.alert(
      "Frase Salva!",
      "Sua frase de recuperação foi salva com segurança",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("CreateOption"),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <BackButton onPress={handleBack} />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <KeyRound
                size={wp(28)}
                color={theme.colors.primary}
                style={styles.keyIcon}
              />
              <Text style={styles.title}>Frase de Recuperação</Text>
            </View>
            <Text style={styles.subtitle}>
              Escreva as palavras e{"\n"}mantenha-as em um lugar seguro
            </Text>
          </View>

          {/* Seed Phrase Grid */}
          <View style={styles.seedGrid}>
            {DEMO_SEED_PHRASE.map((word, index) => (
              <View key={index} style={styles.seedItem}>
                <Text style={styles.seedNumber}>{index + 1}</Text>
                <Text style={styles.seedWord}>{word}</Text>
              </View>
            ))}
          </View>

          {/* Copy Button */}
          <TouchableOpacity
            style={styles.copyButton}
            onPress={handleCopyToClipboard}
            activeOpacity={0.7}
            disabled={hasCopied}
          >
            {hasCopied ? (
              <CheckCircle
                size={wp(20)}
                color={theme.colors.primary}
                style={styles.copyIcon}
              />
            ) : (
              <Copy
                size={wp(20)}
                color={theme.colors.primary}
                style={styles.copyIcon}
              />
            )}
            <Text style={[styles.copyText, hasCopied && styles.copiedText]}>
              {hasCopied
                ? "Frase copiada!"
                : "Copiar para área de transferência"}
            </Text>
          </TouchableOpacity>

          {/* Spacer para o botão */}
          <View style={styles.buttonSpacer} />
        </ScrollView>

        {/* Primary Button */}
        <PrimaryButton
          text="Frase salva"
          onPress={handlePhraseSaved}
          disabled={!hasCopied}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: wp(24),
    paddingTop: hp(140), // 140px do topo conforme especificado
    paddingBottom: hp(20),
  },
  header: {
    alignItems: "center",
    marginBottom: hp(24), // 24px do texto para o container
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(8), // 8px do título para o texto
  },
  keyIcon: {
    marginRight: wp(12),
  },
  title: {
    fontSize: wp(24),
    fontFamily: "Inter_700Bold",
    color: theme.colors.primary, // Cor primary conforme solicitado
  },
  subtitle: {
    fontSize: wp(18),
    fontFamily: "Inter_500Medium",
    color: theme.colors.textSecondary,
    textAlign: "center",
    lineHeight: wp(24),
  },
  seedGrid: {
    width: wp(306),
    height: hp(257),
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: hp(32),
  },
  seedItem: {
    width: wp(146.5),
    height: hp(32),
    backgroundColor: theme.colors.surface,
    borderRadius: wp(8),
    paddingHorizontal: wp(12),
    marginBottom: hp(13),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  seedNumber: {
    fontSize: wp(14),
    fontFamily: "Inter_500Medium",
    color: theme.colors.textSecondary,
    marginRight: wp(12),
    minWidth: wp(20),
  },
  seedWord: {
    fontSize: wp(16),
    fontFamily: "Inter_500Medium",
    color: theme.colors.text,
    flex: 1,
  },
  copyButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(16),
    marginBottom: hp(20),
  },
  copyIcon: {
    marginRight: wp(8),
  },
  copyText: {
    fontSize: wp(16),
    fontFamily: "Inter_500Medium",
    color: theme.colors.textSecondary,
  },
  copiedText: {
    color: "#FFFFFF",
  },
  buttonSpacer: {
    height: hp(120), // Espaço para o botão absoluto
  },
});
