import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  AdminHomeStackScreen,
  AdminPasswordUpdateStackScreen,
  AdminUpdateStackScreen,
  HomeStackScreen,
  LoginStackScreen,
  UserHomeStackScreen,
  UserPasswordUpdateStackScreen,
  UserUpdateStackScreen,
} from "./StackNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const [isLogin, setIsLogin] = useState("");
  const [isBarberId, setIsBarberId] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("isLogin").then((value) => {
      setIsLogin(value);
    });
    AsyncStorage.getItem("barberId").then((value) => {
      setIsBarberId(value);
    });
  }, []);
  console.log(isBarberId)
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
          } else if (route.name === "UserHome") {
            iconName = "person-outline";
          } else if (route.name === "AdminHome") {
            iconName = "person";
          } else if (route.name === "UserPasswordUpdate") {
            iconName = "brush-outline";
          } else if (route.name === "AdminPasswordUpdate") {
            iconName = "brush";
          } else if (route.name === "UserUpdate") {
            iconName = "create-outline";
          } else if (route.name === "AdminUpdate") {
            iconName = "create";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ title: "Anasayfa" }}
      />
      {isLogin === null &&
        (isBarberId == null && (
          <Tab.Screen
            name="Register"
            component={LoginStackScreen}
            options={{ title: "Kayıt Ol" }}
          />
        ))}

      {isLogin === "true" && (
        <>
          <Tab.Screen
            name="UserHome"
            component={UserHomeStackScreen}
            options={{ title: "Profilim" }}
          />
          <Tab.Screen
            name="UserPasswordUpdate"
            component={UserPasswordUpdateStackScreen}
            options={{ title: "Şifre Güncelle" }}
          />
          <Tab.Screen
            name="UserUpdate"
            component={UserUpdateStackScreen}
            options={{ title: "Profili Güncelle" }}
          />
        </>
      )}
      {isBarberId != null && (
        <>
          <Tab.Screen
            name="AdminHome"
            component={AdminHomeStackScreen}
            options={{ title: "Profilim" }}
          />

          <Tab.Screen
            name="AdminPasswordUpdate"
            component={AdminPasswordUpdateStackScreen}
            options={{ title: "Şifre Güncelle" }}
          />

          <Tab.Screen
            name="AdminUpdate"
            component={AdminUpdateStackScreen}
            options={{ title: "Profili Güncelle" }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
