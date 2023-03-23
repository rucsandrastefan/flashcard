import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const StackNavigator = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <StackNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <StackNavigator.Screen name="Profile" component={ProfileScreen} />
    </StackNavigator.Navigator>
  );
};

export default HomeNavigator;
