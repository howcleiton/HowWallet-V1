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

// Função para font size responsivo
export const fp = (size: number): number => {
  return (SCREEN_WIDTH / BASE_WIDTH) * size;
};

// Breakpoints para diferentes telas
export const isSmallScreen = SCREEN_WIDTH < 350;
export const isMediumScreen = SCREEN_WIDTH >= 350 && SCREEN_WIDTH < 414;
export const isLargeScreen = SCREEN_WIDTH >= 414;
export const isTablet = SCREEN_WIDTH >= 768;

// Função para espaçamentos do Figma
export const spacing = {
  xs: wp(4),
  sm: wp(8), 
  md: wp(16),
  lg: wp(24),
  xl: wp(32),
  xxl: wp(48)
};