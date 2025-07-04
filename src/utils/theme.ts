import { wp, hp, fp } from './responsive';

export const theme = {
  colors: {
    // Cores do seu Figma
    primary: '#D47EAE',
    secondary: '1',
    
    // Backgrounds
    background: '#1F1F1F',
    surface: '#2A2A2A',
    card: '#262626',
    
    // Textos
    text: '#FFFFFF',
    textSecondary: '#FFFFFF',
    textLight: '#B3B3B3',
    
    // Títulos e ícones
    title: '#D47EAE',
    icon: '#D47EAE',
    
    // Estados
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#168BC2',
    
    // Bordas
    border: '#404040',
    borderLight: '#333333',
    
    // Gradiente dos botões
    gradient: ['#D47EAE', '#168BC2'],
    gradientStops: [0, 1],
  },
  
  spacing: {
    xs: wp(4),
    sm: wp(8),
    md: wp(16),
    lg: wp(24),
    xl: wp(32),
    xxl: wp(48),
  },
  
  // Layout específico para botões
  layout: {
    primaryButtonBottom: hp(100), // Posição do botão primário
    secondaryButtonBottom: hp(40), // Posição do botão secundário
    buttonHeight: hp(48), // Altura do botão
    buttonSpacing: hp(12), // Espaçamento entre botões
    minContentSpacing: hp(12), // Espaçamento mínimo do conteúdo
    // Espaçamento total necessário: 100 + 48 + 12 = 160
    contentPaddingBottom: hp(160),
  },
  
  fontSize: {
    xs: fp(12),
    sm: fp(14),
    md: fp(16),
    lg: fp(18),
    xl: fp(20),
    xxl: fp(24),
    xxxl: fp(32),
  },
  
  borderRadius: {
    sm: wp(8),
    md: wp(12),
    lg: wp(16),
    xl: wp(24),
  },

  // Tipografia do seu Figma
  typography: {
    // Título principal - Inter Bold 30px (Welcome Screen)
    hero: {
      fontSize: fp(30),
      fontWeight: '700' as const,
      color: '#FFFFFF',
      fontFamily: 'Inter_700Bold',
    },
    
    // Títulos - Inter Bold 24px
    title: {
      fontSize: fp(24),
      fontWeight: '700' as const,
      color: '#D47EAE',
      fontFamily: 'Inter_700Bold',
    },
    
    // Subtítulos - Inter Bold 18px  
    subtitle: {
      fontSize: fp(18),
      fontWeight: '700' as const,
      color: '#D47EAE',
      fontFamily: 'Inter_700Bold',
    },
    
    // Texto normal - Inter Medium 18px
    body: {
      fontSize: fp(18),
      fontWeight: '500' as const,
      color: '#FFFFFF',
      fontFamily: 'Inter_500Medium',
    },
    
    // Texto pequeno - Inter Medium 16px
    caption: {
      fontSize: fp(16),
      fontWeight: '500' as const,
      color: '#FFFFFF',
      fontFamily: 'Inter_500Medium',
    },
    
    // Botões - Inter Bold 18px
    button: {
      fontSize: fp(18),
      fontWeight: '700' as const,
      color: '#FFFFFF',
      fontFamily: 'Inter_700Bold',
    },
  },
};