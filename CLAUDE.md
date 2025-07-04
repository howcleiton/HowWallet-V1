# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HowWallet is a React Native cryptocurrency wallet app built with Expo SDK 53. The app features a pink/purple (#D47EAE) and blue (#168BC2) gradient theme with a dark background (#1F1F1F). The app supports both Solana and Ethereum chains.

## Development Commands

- `npm start` - Start Expo development server
- `npm run android` - Start on Android device/emulator  
- `npm run ios` - Start on iOS device/simulator
- `npm run web` - Start web development server

## Architecture Overview

### Navigation Architecture
The app uses a custom state-based navigation system instead of React Navigation's navigators. Navigation is handled through:
- App.tsx manages the current screen state with `useState("Welcome")`
- Screen components receive an `onNavigate` prop to switch between screens
- Current screens: WelcomeScreen, SecurityScreen

### Design System
The app follows a structured design system based on Figma specifications:

**Theme System (src/utils/theme.ts)**:
- Primary colors: #D47EAE (pink), #168BC2 (blue)
- Dark theme with #1F1F1F background
- Typography uses Inter font family (Inter_500Medium, Inter_700Bold)
- Gradient buttons with linear gradients between primary colors

**Responsive System (src/utils/responsive.ts)**:
- Based on Figma dimensions: 393x852px base
- `wp()`, `hp()`, `fp()` functions for responsive width, height, and font sizing
- Special functions for Lottie animations: `getLottieSize()`, `getAnimationMarginTop()`
- Breakpoint helpers: `isSmallScreen`, `isMediumScreen`, `isLargeScreen`, `isTablet`

### Component Architecture

**CustomButton Component**:
- Supports two variants: "primary" (gradient) and "secondary" (transparent with border)
- Position system: "button1" (165px from bottom) and "button2" (104px from bottom)
- Disabled state handling with opacity changes
- Fixed positioning at 300px width, centered horizontally

**Screen Components**:
- Use SafeAreaView for proper status bar handling
- Consistent dark theme status bar styling
- Lottie animations positioned with responsive functions
- Follow Figma spacing specifications precisely

### Dependencies & Libraries

**Core Dependencies**:
- Expo SDK 53 with React Native 0.79.4
- React 19.0.0 with TypeScript support
- Inter Google Fonts (@expo-google-fonts/inter)

**Navigation & UI**:
- React Navigation packages (though currently using custom navigation)
- Expo Linear Gradient for button gradients
- Lottie React Native for animations
- Lucide React Native for icons (with Ionicons as fallback)

**Blockchain Integration**:
- @solana/web3.js for Solana blockchain
- ethers.js for Ethereum blockchain
- React Native QR Code SVG for QR generation

**Utilities**:
- Expo Barcode Scanner for QR scanning
- AsyncStorage for local data persistence

## Code Style Guidelines

- Use TypeScript with strict mode enabled
- Follow Expo/React Native conventions
- Component props should use interfaces with descriptive names
- Use functional components with hooks
- Responsive sizing must use the utility functions (wp, hp, fp) rather than hardcoded values
- Colors must reference theme.colors rather than hardcoded hex values
- Maintain the precise Figma spacing specifications using hp() values

## File Structure Patterns

- Components go in `src/components/` with PascalCase naming
- Screens go in `src/screens/` with "Screen" suffix
- Utilities in `src/utils/` provide responsive and theme functions
- Empty directories exist for future navigation, services, and types
- Lottie animations stored in `assets/` directory as .json files