import { Dimensions, PixelRatio, Platform } from 'react-native';

// Pega as dimensões da tela
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Dimensões do seu Figma
const BASE_WIDTH = 393;
const BASE_HEIGHT = 852;

// Densidade de pixel para diferentes dispositivos
const PIXEL_DENSITY = PixelRatio.get();

// Função para width responsivo
export const wp = (size: number): number => {
  return (SCREEN_WIDTH / BASE_WIDTH) * size;
};

// Função para height responsivo  
export const hp = (size: number): number => {
  return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
};

// Função para font size responsivo com ajuste de densidade
export const fp = (size: number): number => {
  const scaledSize = (SCREEN_WIDTH / BASE_WIDTH) * size;
  
  // Ajuste baseado na densidade do pixel e plataforma
  if (Platform.OS === 'ios') {
    return scaledSize;
  } else {
    // Android: ajuste baseado na densidade
    return scaledSize * (PIXEL_DENSITY > 2 ? 0.95 : 1);
  }
};

// Breakpoints para diferentes telas
export const isSmallScreen = SCREEN_WIDTH < 350;
export const isMediumScreen = SCREEN_WIDTH >= 350 && SCREEN_WIDTH < 414;
export const isLargeScreen = SCREEN_WIDTH >= 414 && SCREEN_WIDTH < 768;
export const isTablet = SCREEN_WIDTH >= 768;
export const isLandscape = SCREEN_WIDTH > SCREEN_HEIGHT;

// Detecção de plataforma
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

// Função para espaçamentos do Figma
export const spacing = {
  xs: wp(4),
  sm: wp(8), 
  md: wp(16),
  lg: wp(24),
  xl: wp(32),
  xxl: wp(48)
};

// Função para obter espaçamento responsivo baseado no tamanho da tela
export const getResponsiveSpacing = (baseSize: number): number => {
  if (isSmallScreen) return wp(baseSize * 0.8);
  if (isTablet) return wp(baseSize * 1.2);
  return wp(baseSize);
};

// Função para obter font size responsivo baseado no tamanho da tela
export const getResponsiveFontSize = (baseSize: number): number => {
  let scaledSize = fp(baseSize);
  
  if (isSmallScreen) {
    scaledSize = fp(baseSize * 0.9);
  } else if (isTablet) {
    scaledSize = fp(baseSize * 1.1);
  }
  
  return scaledSize;
};

// Função para obter largura responsiva para botões
export const getResponsiveButtonWidth = (): number => {
  if (isSmallScreen) return wp(280);
  if (isTablet) return wp(400);
  return wp(313); // Largura padrão (393 - 40*2)
};

// Função para obter altura responsiva para elementos
export const getResponsiveHeight = (baseHeight: number): number => {
  if (isSmallScreen) return hp(baseHeight * 0.9);
  if (isTablet) return hp(baseHeight * 1.1);
  return hp(baseHeight);
};

// Função para obter margem segura baseada na plataforma
export const getSafeAreaMargin = () => {
  if (isIOS) {
    return {
      top: hp(20),
      bottom: hp(34), // Para dispositivos com home indicator
    };
  } else {
    return {
      top: hp(24),
      bottom: hp(16),
    };
  }
};