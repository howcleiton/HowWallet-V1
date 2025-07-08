import { wp, hp, fp, getResponsiveFontSize, getResponsiveSpacing, isSmallScreen, isTablet } from './responsive';

export const theme = {
  colors: {
    // Cores do seu Figma
    primary: '#D47EAE',
    secondary: '#168BC2',
    
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
    xs: getResponsiveSpacing(4),
    sm: getResponsiveSpacing(8),
    md: getResponsiveSpacing(16),
    lg: getResponsiveSpacing(24),
    xl: getResponsiveSpacing(32),
    xxl: getResponsiveSpacing(48),
  },
  
  fontSize: {
    xs: getResponsiveFontSize(12),
    sm: getResponsiveFontSize(14),
    md: getResponsiveFontSize(16),
    lg: getResponsiveFontSize(18),
    xl: getResponsiveFontSize(20),
    xxl: getResponsiveFontSize(24),
    xxxl: getResponsiveFontSize(32),
  },
  
  borderRadius: {
    sm: wp(8),
    md: wp(12),
    lg: wp(16),
    xl: wp(24),
  },

  // Tipografia responsiva do seu Figma
  typography: {
    // Títulos principais - Inter Bold 30px (WelcomeScreen)
    mainTitle: {
      fontSize: getResponsiveFontSize(30),
      fontWeight: '700' as const,
      color: '#FFFFFF',
      fontFamily: 'Inter_700Bold',
      lineHeight: getResponsiveFontSize(36),
    },
    
    // Títulos - Inter Bold 24px
    title: {
      fontSize: getResponsiveFontSize(24),
      fontWeight: '700' as const,
      color: '#D47EAE',
      fontFamily: 'Inter_700Bold',
      lineHeight: getResponsiveFontSize(30),
    },
    
    // Subtítulos - Inter Bold 18px  
    subtitle: {
      fontSize: getResponsiveFontSize(18),
      fontWeight: '700' as const,
      color: '#D47EAE',
      fontFamily: 'Inter_700Bold',
      lineHeight: getResponsiveFontSize(24),
    },
    
    // Texto normal - Inter Medium 18px
    body: {
      fontSize: getResponsiveFontSize(18),
      fontWeight: '500' as const,
      color: '#FFFFFF',
      fontFamily: 'Inter_500Medium',
      lineHeight: getResponsiveFontSize(24),
    },
    
    // Texto pequeno - Inter Medium 16px
    caption: {
      fontSize: getResponsiveFontSize(16),
      fontWeight: '500' as const,
      color: '#FFFFFF',
      fontFamily: 'Inter_500Medium',
      lineHeight: getResponsiveFontSize(20),
    },
    
    // Texto de botão - Inter Bold 18px
    button: {
      fontSize: getResponsiveFontSize(18),
      fontWeight: '700' as const,
      color: '#FFFFFF',
      fontFamily: 'Inter_700Bold',
    },
    
    // Texto de botão secundário - Inter Medium 18px
    buttonSecondary: {
      fontSize: getResponsiveFontSize(18),
      fontWeight: '500' as const,
      color: '#FFFFFF',
      fontFamily: 'Inter_500Medium',
    },
  },
};