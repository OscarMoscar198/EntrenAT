import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "./src/ui/screens/WelcomeScreen";
import { LoginScreen } from "./src/ui/screens/LoginScreen";
import { RegisterScreen } from "./src/ui/screens/RegisterScreen";
import { PaperProvider } from "react-native-paper";
import { AppRegistry } from "react-native";
import MuscleScreen from "./src/ui/screens/MuscleScreen";
import HomeScreen from "./src/ui/screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
