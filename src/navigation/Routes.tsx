import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// import PersonalInfoScreen from "../pages/SettingsScreen/PersonalInfoScreen";
// import HelpScreen from "../pages/SettingsScreen/HelpScreen";
// import LanguageScreen from "../pages/SettingsScreen/LanguageScreen";
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";
import TabBar from "./TabBar";
import {RouteCardPage} from "../pages/RouteCardPage";
// import { LEFT_ARROW } from "../../assets";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "pop",
        animation: "slide_from_bottom",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Main"
        component={TabBar}
        options={{
          title: "Профиль",
        }}
      />
      <Stack.Screen name='route-card' component={RouteCardPage}/>
      {/* <Stack.Screen name="Sign-up" component={SignUp} />
      <Stack.Screen name="Sign-in" component={SignIn} />

      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Help" component={HelpScreen} /> */}
      {/* <Stack.Screen
        name="Personal"
        component={PersonalInfoScreen}
        options={{
          title: "Личные данные",
          headerStyle: {
            backgroundColor: "#1A1A1A",
            height: 40,
            borderBottomWidth: 0,
          },
          headerBackImageSource: LEFT_ARROW,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: "400",
          },
          headerShown: true,
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default Routes;
