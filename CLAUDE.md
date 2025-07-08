# CLAUDE.md - Especificações do Projeto HOWWALLET V2

## Sobre o Projeto
HOWWALLET V2 é uma carteira de criptomoedas desenvolvida em React Native com TypeScript e Expo. O projeto visa criar uma interface responsiva e intuitiva para gerenciamento de ativos digitais.

## Stack Tecnológica
- **React Native**: Framework para desenvolvimento mobile multiplataforma
- **TypeScript**: Superset do JavaScript com tipagem estática
- **Expo**: Plataforma para desenvolvimento React Native
- **Interface**: Responsiva e otimizada para dispositivos móveis

## Instruções para o Claude

### Idioma
- **SEMPRE responder em português do Brasil**
- Utilizar terminologias técnicas apropriadas em português
- Manter comunicação clara e direta

### Processamento
- **Utilizar o máximo poder de processamento disponível**
- Fornecer respostas precisas e assertivas
- Analisar profundamente o contexto antes de responder
- Considerar as melhores práticas para React Native + TypeScript + Expo

### Contexto do Projeto
Este é um projeto de carteira de criptomoedas que deve:
- Ser completamente responsivo
- Seguir padrões de segurança para aplicações financeiras
- Utilizar as melhores práticas de React Native/Expo
- Implementar TypeScript de forma rigorosa
- Manter performance otimizada

### Diretrizes de Desenvolvimento
- Priorizar componentes reutilizáveis
- Seguir padrões de arquitetura limpa
- Implementar tratamento de erros robusto
- Considerar acessibilidade em todas as interfaces
- Otimizar para diferentes tamanhos de tela

## Arquitetura do Projeto

### Estrutura de Pastas Atual
```
HOWWALLETV2/
├── App.tsx                 # Componente principal
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── PrimaryButton.tsx
│   │   ├── SecondaryButton.tsx
│   │   └── CustomButton.tsx
│   ├── screens/            # Telas da aplicação
│   │   ├── HomeScreen.tsx
│   │   └── WelcomeScreen.tsx
│   └── utils/              # Utilitários
│       ├── responsive.ts
│       └── theme.ts
└── assets/                 # Recursos visuais (Lottie, imagens)
```

### Estrutura Recomendada para Expansão
```
src/
├── components/
│   ├── ui/                 # Componentes base (Button, Input, Card)
│   ├── forms/              # Formulários específicos
│   └── wallet/             # Componentes específicos da wallet
├── screens/
├── services/               # APIs e blockchain
├── hooks/                  # Custom hooks
├── types/                  # Tipos globais
├── constants/              # Constantes do projeto
├── navigation/             # Configuração de navegação
└── context/                # Context providers
```

## Padrões do Projeto

### Sistema de Cores
```typescript
export const colors = {
  primary: '#D47EAE',       // Rosa principal
  secondary: '#168BC2',     // Azul secundário
  background: '#1F1F1F',    // Fundo escuro
  surface: '#2A2A2A',       // Superfícies
  text: '#FFFFFF',          // Texto principal
  textSecondary: '#B0B0B0', // Texto secundário
  success: '#4CAF50',       // Verde sucesso
  warning: '#FF9800',       // Laranja aviso
  error: '#F44336',         // Vermelho erro
  gradient: ['#D47EAE', '#168BC2']
};
```

### Tipografia
- **Fonte Principal**: Inter (Medium 500, Bold 700)
- **Escalas**: xs(12px), sm(14px), md(16px), lg(18px), xl(20px), xxl(24px), xxxl(32px)
- **Responsividade**: Utilizar `fp()` para fontes responsivas

### Espaçamento
- **Sistema Base**: 4px
- **Escalas**: xs(4px), sm(8px), md(16px), lg(24px), xl(32px), xxl(48px)
- **Responsividade**: Utilizar `wp()` e `hp()` para dimensões

### Componentes Padrão

#### Estrutura de Componente
```typescript
interface ComponentProps {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const Component: React.FC<ComponentProps> = ({ testID, style, children, ...props }) => {
  return (
    <View testID={testID} style={[defaultStyles, style]} {...props}>
      {children}
    </View>
  );
};
```

#### Botões Padronizados
```typescript
// Usar variantes: primary, secondary, tertiary, danger
// Usar tamanhos: small, medium, large
<Button variant="primary" size="large" onPress={handlePress}>
  Texto do Botão
</Button>
```

### Responsividade

#### Breakpoints
- **small**: < 360px
- **medium**: 360px - 768px
- **large**: > 768px
- **tablet**: > 768px

#### Funções Utilitárias
```typescript
wp(size): Width percentage
hp(size): Height percentage
fp(size): Font size responsivo
isSmallDevice(): boolean
isMediumDevice(): boolean
isLargeDevice(): boolean
```

### Navegação

#### Estrutura Recomendada
```typescript
type RootStackParamList = {
  Welcome: undefined;
  CreateWallet: undefined;
  ImportWallet: undefined;
  Home: undefined;
  Send: { address?: string };
  Receive: undefined;
  Settings: undefined;
  TransactionDetails: { transactionId: string };
};
```

### Gerenciamento de Estado

#### Context Providers
```typescript
// WalletContext: Estado da carteira
// ThemeContext: Tema da aplicação
// AuthContext: Autenticação
```

### Segurança

#### Diretrizes
- Usar Keychain/Keystore para chaves privadas
- Implementar autenticação biométrica
- Validar todas as entradas do usuário
- Não armazenar dados sensíveis em AsyncStorage
- Usar HTTPS para todas as comunicações

### Performance

#### Otimizações
- Lazy loading de telas
- Memoização de componentes com React.memo
- Uso de FlatList para listas grandes
- Otimização de imagens com webp
- Debounce em inputs de busca

### Testes

#### Estrutura
```
__tests__/
├── components/
├── screens/
├── services/
└── utils/
```

#### Comandos
- `npm test`: Executar testes
- `npm run test:watch`: Executar em modo watch
- `npm run test:coverage`: Gerar relatório de cobertura

### Blockchain

#### Redes Suportadas
- Solana (mainnet-beta, devnet)
- Ethereum (mainnet, testnet)

#### Bibliotecas
- `@solana/web3.js`: Cliente Solana
- `ethers`: Cliente Ethereum
- `@react-native-async-storage/async-storage`: Armazenamento local

### Animações

#### Lottie
- Usar animações em assets/
- Configurar com `lottie-react-native`
- Otimizar para performance

#### Transições
- Usar `react-native-reanimated` para animações complexas
- Implementar transições suaves entre telas

## EAS Build & Development

### Configuração Dev Build
O projeto foi configurado para usar **EAS Build** com **Development Client**, permitindo o uso de bibliotecas nativas do Android e iOS.

#### Arquivos Configurados
- ✅ `eas.json`: Configuração de build profiles
- ✅ `app.json`: Plugin `expo-dev-client` adicionado
- ✅ `package.json`: Dependência `expo-dev-client` instalada

#### Profiles de Build
```json
{
  "development": {
    "developmentClient": true,
    "distribution": "internal",
    "android": { "buildType": "apk" },
    "ios": { "resourceClass": "m-medium" }
  },
  "preview": {
    "distribution": "internal",
    "android": { "buildType": "apk" },
    "ios": { "resourceClass": "m-medium" }
  },
  "production": {
    "android": { "buildType": "aab" },
    "ios": { "resourceClass": "m-medium" }
  }
}
```

#### Comandos EAS Build
```bash
# Fazer login (obrigatório)
eas login

# Builds de desenvolvimento
eas build --platform android --profile development
eas build --platform ios --profile development

# Builds para preview/teste
eas build --platform android --profile preview
eas build --platform ios --profile preview

# Builds de produção
eas build --platform android --profile production
eas build --platform ios --profile production

# Build para ambas as plataformas
eas build --platform all --profile development
```

#### Instalação do Development Client
1. **Após o build**: Baixe o APK/IPA gerado
2. **Instale no dispositivo**: Development client customizado
3. **Execute**: `npx expo start --dev-client`
4. **Escaneie QR Code**: No app development client

#### Vantagens do Dev Build
- ✅ **Bibliotecas nativas**: Uso completo de módulos nativos
- ✅ **Debugging**: Melhor experiência de debug
- ✅ **Performance**: Mais próximo do app final
- ✅ **Testes**: Teste em dispositivos reais
- ✅ **Plugins**: Suporte completo a plugins Expo

#### Workflow Recomendado
1. **Desenvolvimento**: Use `development` profile
2. **Testes internos**: Use `preview` profile
3. **Produção**: Use `production` profile
4. **Bibliotecas nativas**: Sempre rebuild após adicionar

### Bibliotecas Nativas Suportadas
Com o dev build, você pode usar:
- **Biometria**: `expo-local-authentication`
- **Keychain**: `expo-secure-store`
- **Câmera**: `expo-camera`
- **Bluetooth**: `react-native-bluetooth-*`
- **Criptografia**: `react-native-crypto`
- **Background Tasks**: `expo-background-fetch`
- **Push Notifications**: `expo-notifications`

## Comandos Úteis
- `npm run start`: Iniciar o servidor de desenvolvimento
- `npx expo start --dev-client`: Iniciar com development client
- `npm run android`: Executar no Android (somente Expo Go)
- `npm run ios`: Executar no iOS (somente Expo Go)
- `npm run web`: Executar no navegador
- `npm run lint`: Verificar código
- `npm run typecheck`: Verificar tipos TypeScript
- `npm test`: Executar testes
- `expo install`: Instalar dependências compatíveis com Expo
- `eas build --platform android --profile development`: Build dev Android
- `eas build --platform ios --profile development`: Build dev iOS