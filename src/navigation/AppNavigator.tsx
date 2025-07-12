import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../utils/theme";
import WelcomeScreen from "../screens/WelcomeScreen";
import CreateOptionScreen from "../screens/CreateOptionScreen";
import SeedPhraseScreen from "../screens/SeedPhraseScreen";

export type RootStackParamList = {
  Welcome: undefined;
  CreateOption: undefined;
  SeedPhrase: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
          animation: "slide_from_right",
          animationDuration: 200,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="CreateOption" component={CreateOptionScreen} />
        <Stack.Screen name="SeedPhrase" component={SeedPhraseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
