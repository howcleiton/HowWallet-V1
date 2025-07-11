import { wp, hp, fp, isSmallScreen } from './responsive';

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
    xs: wp(4),
    sm: wp(8),
    md: wp(16),
    lg: wp(24),
    xl: wp(32),
    xxl: wp(48),
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
  
  // Tamanhos de fonte adaptativos
  adaptiveFontSize: {
    xs: isSmallScreen ? fp(10) : fp(12),
    sm: isSmallScreen ? fp(12) : fp(14),
    md: isSmallScreen ? fp(14) : fp(16),
    lg: isSmallScreen ? fp(16) : fp(18),
    xl: isSmallScreen ? fp(18) : fp(20),
    xxl: isSmallScreen ? fp(20) : fp(24),
    xxxl: isSmallScreen ? fp(24) : fp(32),
  },
  
  borderRadius: {
    sm: wp(8),
    md: wp(12),
    lg: wp(16),
    xl: wp(24),
  },

  // Tipografia do seu Figma
  typography: {
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
  },
};