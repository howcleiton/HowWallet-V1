import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../utils/theme";
import { wp, hp } from "../utils/responsive";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[theme.typography.caption, styles.greeting]}>
              Olá! 👋
            </Text>
            <Text style={[theme.typography.title]}>How Wallet</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons
              name="person-circle"
              size={wp(40)}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        </View>

        {/* Saldo Principal */}
        <View style={styles.balanceCard}>
          <Text
            style={[
              theme.typography.caption,
              { color: theme.colors.textLight },
            ]}
          >
            Saldo Total
          </Text>
          <Text style={[theme.typography.title, { fontSize: hp(36) }]}>
            0.00 SOL
          </Text>
          <Text
            style={[
              theme.typography.caption,
              { color: theme.colors.textLight },
            ]}
          >
            ≈ $0.00 USD
          </Text>
        </View>

        {/* Ações Rápidas */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Ionicons
                name="arrow-up"
                size={wp(24)}
                color={theme.colors.background}
              />
            </View>
            <Text style={[theme.typography.caption, styles.actionText]}>
              Enviar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Ionicons
                name="arrow-down"
                size={wp(24)}
                color={theme.colors.background}
              />
            </View>
            <Text style={[theme.typography.caption, styles.actionText]}>
              Receber
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Ionicons
                name="swap-horizontal"
                size={wp(24)}
                color={theme.colors.background}
              />
            </View>
            <Text style={[theme.typography.caption, styles.actionText]}>
              Trocar
            </Text>
          </TouchableOpacity>
        </View>

        {/* Lista de Transações */}
        <View style={styles.transactionsContainer}>
          <Text
            style={[
              theme.typography.subtitle,
              { marginBottom: theme.spacing.md },
            ]}
          >
            Transações Recentes
          </Text>

          <View style={styles.emptyState}>
            <Ionicons
              name="receipt-outline"
              size={wp(48)}
              color={theme.colors.textLight}
            />
            <Text
              style={[
                theme.typography.caption,
                {
                  color: theme.colors.textLight,
                  textAlign: "center",
                  marginTop: theme.spacing.sm,
                },
              ]}
            >
              Nenhuma transação ainda{"\n"}Comece enviando ou recebendo SOL
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },
  greeting: {
    color: theme.colors.textLight,
    marginBottom: theme.spacing.xs,
  },
  profileButton: {
    padding: theme.spacing.xs,
  },
  balanceCard: {
    backgroundColor: theme.colors.surface,
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.md,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.lg,
  },
  actionButton: {
    alignItems: "center",
  },
  actionIcon: {
    width: wp(60),
    height: wp(60),
    borderRadius: wp(30),
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  actionText: {
    color: theme.colors.text,
  },
  transactionsContainer: {
    paddingHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.lg,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: theme.spacing.xxl,
  },
});
