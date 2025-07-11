Aimport React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../utils/theme";
import { wp, hp, isSmallScreen } from "../utils/responsive";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

interface AuthModalProps {
  visible: boolean;
  onClose: () => void;
  onGooglePress: () => void;
  onApplePress: () => void;
}

export default function AuthModal({
  visible,
  onClose,
  onGooglePress,
  onApplePress,
}: AuthModalProps) {
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const backdropAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Animar entrada do modal
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(backdropAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Animar saída do modal
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: SCREEN_HEIGHT,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(backdropAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(backdropAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
    >
      <View style={styles.container}>
        {/* Backdrop */}
        <TouchableWithoutFeedback onPress={handleClose}>
          <Animated.View
            style={[
              styles.backdrop,
              {
                opacity: backdropAnim,
              },
            ]}
          />
        </TouchableWithoutFeedback>

        {/* Bottom Sheet */}
        <Animated.View
          style={[
            styles.bottomSheet,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          {/* Handle */}
          <View style={styles.handle} />

          {/* Content */}
          <View style={styles.content}>
            <Text style={styles.title}>Continuar com</Text>
            <Text style={styles.subtitle}>
              Escolha uma opção para continuar
            </Text>

            {/* Google Button */}
            <TouchableOpacity
              style={styles.authButton}
              onPress={onGooglePress}
              activeOpacity={0.8}
            >
              <Image
                source={require("../../assets/icon-google.png")}
                style={styles.googleIcon}
                resizeMode="contain"
              />
              <Text style={styles.authButtonText}>Continuar com Google</Text>
            </TouchableOpacity>

            {/* Apple Button */}
            <TouchableOpacity
              style={styles.authButton}
              onPress={onApplePress}
              activeOpacity={0.8}
            >
              <Ionicons
                name="logo-apple"
                size={wp(20)}
                color={theme.colors.text}
                style={styles.authIcon}
              />
              <Text style={styles.authButtonText}>Continuar com Apple</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomSheet: {
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: wp(20),
    borderTopRightRadius: wp(20),
    paddingBottom: hp(40),
    minHeight: hp(280),
  },
  handle: {
    width: wp(40),
    height: hp(4),
    backgroundColor: theme.colors.text,
    opacity: 0.3,
    borderRadius: wp(2),
    alignSelf: "center",
    marginTop: hp(12),
    marginBottom: hp(20),
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
  },
  title: {
    fontSize: isSmallScreen ? hp(20) : hp(24),
    fontFamily: "Inter_700Bold",
    color: theme.colors.text,
    textAlign: "center",
    marginBottom: hp(8),
  },
  subtitle: {
    fontSize: isSmallScreen ? hp(14) : hp(16),
    fontFamily: "Inter_500Medium",
    color: theme.colors.text,
    opacity: 0.7,
    textAlign: "center",
    marginBottom: hp(32),
  },
  authButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: hp(48),
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.text,
    backgroundColor: "transparent",
    marginBottom: hp(16),
    paddingHorizontal: theme.spacing.md,
  },
  authIcon: {
    marginRight: wp(12),
  },
  googleIcon: {
    width: wp(20),
    height: wp(20),
    marginRight: wp(12),
  },
  authButtonText: {
    fontSize: isSmallScreen ? hp(16) : hp(18),
    fontFamily: "Inter_500Medium",
    color: theme.colors.text,
  },
});
