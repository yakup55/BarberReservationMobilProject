import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import React from "react";
import { Button, Center, IconButton, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Contact from "../Contact/Contact";
import About from "../About/About";
import UserHome from "../User/UserHome";
import UserPasswordUpdate from "../User/UserPasswordUpdate";
import UserUpdate from "../User/UserUpdate";
import AdminUpdate from "../../Admin/AdminUpdate";
import AdminHome from "../../Admin/AdminHome";
import AdminPasswordUpdate from "../../Admin/AdminPasswordUpdate"
import BarberLogin from "../Login/BarberLogin";
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={({ navigation }) => ({
          headerLeft: () => (
            <Center>
              <VStack space={4} alignItems="center">
                {["sm"].map((size) => (
                  <IconButton
                    colorScheme="indigo"
                    onPress={() => navigation.toggleDrawer()}
                    size={size}
                    variant="outline"
                    _icon={{
                      as: MaterialIcons,
                      name: "menu",
                    }}
                  />
                ))}
              </VStack>
            </Center>
          ),
        })}
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
        component={BarberLogin}
      />
    </LoginStack.Navigator>
  );
}

const ContactStack = createNativeStackNavigator();
function ContactStackScreen() {
  return (
    <ContactStack.Navigator>
      <ContactStack.Screen
        name="Contact"
        options={{ title: "Geri Bildirim Yap" }}
        component={Contact}
      />
    </ContactStack.Navigator>
  );
}

const AboutStack = createNativeStackNavigator();
function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="About"
        options={{ title: "Bize Ulaşın" }}
        component={About}
      />
    </AboutStack.Navigator>
  );
}
const UserHomeStack = createNativeStackNavigator();
function UserHomeStackScreen() {
  return (
    <UserHomeStack.Navigator>
      <UserHomeStack.Screen
        name="UserHome"
        options={{ title: "Profilim" }}
        component={UserHome}
      ></UserHomeStack.Screen>
    </UserHomeStack.Navigator>
  );
}
const UserPasswordUpdateStack = createNativeStackNavigator();
function UserPasswordUpdateStackScreen() {
  return (
    <UserPasswordUpdateStack.Navigator>
      <UserPasswordUpdateStack.Screen
        name="UserPasswordUpdate"
        options={{ title: "Şifre Güncelle" }}
        component={UserPasswordUpdate}
      ></UserPasswordUpdateStack.Screen>
    </UserPasswordUpdateStack.Navigator>
  );
}

const UserUpdateStack = createNativeStackNavigator();
function UserUpdateStackScreen() {
  return (
    <UserUpdateStack.Navigator>
      <UserUpdateStack.Screen
        name="UserUpdate"
        options={{ title: "Profili Güncelle" }}
        component={UserUpdate}
      ></UserUpdateStack.Screen>
    </UserUpdateStack.Navigator>
  );
}
const AdminUpdateStack = createNativeStackNavigator();
function AdminUpdateStackScreen() {
  return (
    <AdminUpdateStack.Navigator>
      <AdminUpdateStack.Screen
        name="AdminUpdate"
        options={{ title: "Profil Güncelle" }}
        component={AdminUpdate}
      ></AdminUpdateStack.Screen>
    </AdminUpdateStack.Navigator>
  );
}
const AdminPasswordUpdateStack = createNativeStackNavigator();
function AdminPasswordUpdateStackScreen() {
  return (
    <AdminPasswordUpdateStack.Navigator>
      <AdminPasswordUpdateStack.Screen
        name="AdminPasswordUpdate"
        options={{ title: "Şifre Güncelle" }}
        component={AdminPasswordUpdate}
      ></AdminPasswordUpdateStack.Screen>
    </AdminPasswordUpdateStack.Navigator>
  );
}
const AdminHomeStack = createNativeStackNavigator();
function AdminHomeStackScreen() {
  return (
    <AdminHomeStack.Navigator>
      <AdminHomeStack.Screen
        name="AdminHome"
        options={{ title: "Profilim" }}
        component={AdminHome}
      ></AdminHomeStack.Screen>
    </AdminHomeStack.Navigator>
  );
}
export {
  HomeStackScreen,
  LoginStackScreen,
  ContactStackScreen,
  AboutStackScreen,
  UserHomeStackScreen,
  UserPasswordUpdateStackScreen,
  UserUpdateStackScreen,
  AdminUpdateStackScreen,
  AdminPasswordUpdateStackScreen,
  AdminHomeStackScreen,
};
