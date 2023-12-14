import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  HomeStackScreen,
  LoginStackScreen,
  UserHomeStackScreen,
  UserPasswordUpdateScreen,
  UserUpdateScreen,
} from "./StackNavigator";
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = name = "home-outline";
          } else if (route.name === "Login") {
            iconName = name = "log-in-outline";
          } else if (route.name === "Register") {
            iconName = name = "log-out-outline";
          }
          else if (route.name === "UserHome") {
            iconName="person-outline"
          }
          else if (route.name === "UserPasswordUpdate") {
            iconName="brush-outline"
          }
          else if (route.name === "UserUpdate") {
            iconName="create-outline"
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: "Anasayfa" }} />
      <Tab.Screen name="Register" component={LoginStackScreen} options={{ title: "Kayıt Ol" }} />
      <Tab.Screen name="UserHome" component={UserHomeStackScreen} options={{ title: "Profilim" }}  />
      <Tab.Screen name="UserPasswordUpdate" component={UserPasswordUpdateScreen} options={{ title: "Şifre Güncelle" }}  />
      <Tab.Screen name="UserUpdate"  component={UserUpdateScreen} options={{ title: "Profili Güncelle" }}  />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
