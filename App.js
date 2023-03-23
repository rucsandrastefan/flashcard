import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "./Screens/LogInScreen/LogInScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ForgotPasswordScreen from "./Screens/ForgotPasswordScreen";
import ForgotPasswordVerifyScreen from "./Screens/ForgotPasswordVerifyScreen";
import ForgotPasswordNewPassScreen from "./Screens/ForgotPasswordNewPassScreen";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import NavigationLayout from "./Screens/NavigationLayout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordVerifyScreen"
          component={ForgotPasswordVerifyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordNewPassScreen"
          component={ForgotPasswordNewPassScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Navigation" component={NavigationLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
