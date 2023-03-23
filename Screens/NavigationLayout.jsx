import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ProfileScreen from "./ProfileScreen";
import HomeNavigator from "./HomeNavigator";
import { View } from "react-native";

const homeName = "Home";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

const NavigationLayout = () => {
  return (
    // <Tab.Navigator
    //   initialRouteName={homeName}
    //   screenOptions={({ route }) => ({
    //     activeTintColor: "#4f46e5",
    //     inactiveTintColor: "gray",
    //     tabBarIcon: ({ focused, color, size }) => {
    //       let iconName;
    //       let rn = route.name;

    //       if (rn === homeName) {
    //         iconName = focused ? "home" : "home-outline";
    //       } else if (rn === profileName) {
    //         iconName = focused ? "person" : "person-outline";
    //       }
    //       return <Ionicons name={iconName} size={30} color={"#4f46e5"} />;
    //     },

    //     tabBarStyle: { height: 70, padding: 10 },
    //   })}
    // >
    //   <Tab.Screen name={homeName} component={HomeNavigator} />
    //   <Tab.Screen name={profileName} component={ProfileScreen} />
    // </Tab.Navigator>
    <View></View>
  );
};

export default NavigationLayout;
