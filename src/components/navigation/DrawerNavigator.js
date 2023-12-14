import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import StackNavigator, { AboutStackScreen, ContactStackScreen, HomeStackScreen, LoginStackScreen } from "./StackNavigator"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator   screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen name="Anasayfa" component={TabNavigator} />
      <Drawer.Screen name="Geri Bildirim yapın" component={ContactStackScreen} />
      <Drawer.Screen name="Bize Ulaşın" component={AboutStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
