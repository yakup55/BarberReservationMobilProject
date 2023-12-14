import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import configureStore from "./src/Redux/configureStore";
import { Provider } from "react-redux";
import DrawerNavigator from "./src/components/navigation/DrawerNavigator";

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <DrawerNavigator></DrawerNavigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
export default App;
