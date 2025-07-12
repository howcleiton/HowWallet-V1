import { Dimensions, PixelRatio } from 'react-native';

// Pega as dimensões da tela
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Dimensões do seu Figma
const BASE_WIDTH = 393;
const BASE_HEIGHT = 852;

// Função para width responsivo
export const wp = (size: number): number => {
  return (SCREEN_WIDTH / BASE_WIDTH) * size;
};

// Função para height responsivo  
export const hp = (size: number): number => {
  return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
};

// Função para font size responsivo com limites
export const fp = (size: number): number => {
  const scaledSize = (SCREEN_WIDTH / BASE_WIDTH) * size;
  // Limitando o tamanho da fonte para evitar textos muito grandes ou pequenos
  return Math.max(12, Math.min(scaledSize, size * 1.2));
};

// Breakpoints para diferentes telas
export const isSmallScreen = SCREEN_WIDTH < 350;
export const isMediumScreen = SCREEN_WIDTH >= 350 && SCREEN_WIDTH < 414;
export const isLargeScreen = SCREEN_WIDTH >= 414;
export const isTablet = SCREEN_WIDTH >= 768;

// Função para dimensões mínimas/máximas seguras
export const safeWp = (size: number, min?: number, max?: number): number => {
  const scaled = wp(size);
  if (min && scaled < min) return min;
  if (max && scaled > max) return max;
  return scaled;
};

export const safeHp = (size: number, min?: number, max?: number): number => {
  const scaled = hp(size);
  if (min && scaled < min) return min;
  if (max && scaled > max) return max;
  return scaled;
};

// Função para verificar se há espaço suficiente na tela
export const hasVerticalSpace = (requiredHeight: number): boolean => {
  return SCREEN_HEIGHT > requiredHeight;
};

// Função para adaptar layout em telas pequenas
export const getAdaptiveSpacing = (defaultSpacing: number): number => {
  if (isSmallScreen) return defaultSpacing * 0.7;
  if (isMediumScreen) return defaultSpacing * 0.85;
  return defaultSpacing;
};

// Função para espaçamentos do Figma com adaptação para telas pequenas
export const spacing = {
  xs: getAdaptiveSpacing(wp(4)),
  sm: getAdaptiveSpacing(wp(8)), 
  md: getAdaptiveSpacing(wp(16)),
  lg: getAdaptiveSpacing(wp(24)),
  xl: getAdaptiveSpacing(wp(32)),
  xxl: getAdaptiveSpacing(wp(48))
};

// Função para calcular posicionamento seguro com safe area insets
export const getSafeBottomSpacing = (baseSpacing: number, bottomInset: number): number => {
  return baseSpacing + bottomInset;
};

// Função para calcular altura mínima do container de botões com safe area
export const getSafeButtonContainerHeight = (bottomInset: number): number => {
  const baseHeight = hp(184); // Altura base do container de botões
  return baseHeight + bottomInset;
};
