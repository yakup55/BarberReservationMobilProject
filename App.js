import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./src/components/Register/Register";
import { Ionicons } from "@expo/vector-icons";
import Login from "./src/components/Login/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BerberLogin from "./src/components/Login/BerberLogin";
import configureStore from "./src/Redux/configureStore";
import { Provider } from "react-redux";

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={{ title: "Anasayfa" }}
        component={HomeScreen}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}
const LoginStack = createNativeStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Register"
        options={{ title: "Kayıt Ol" }}
        component={Register}
      />
      <LoginStack.Screen
        name="Login"
        options={{ title: "Kullanıcı Giriş Yap" }}
        component={Login}
      />
      <LoginStack.Screen
        name="BerberLogin"
        options={{ title: "Berber Giriş Yap" }}
        component={BerberLogin}
      />
    </LoginStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
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

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Register" component={LoginStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
export default App;
