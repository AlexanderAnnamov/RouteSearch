import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import React from 'react';

// import PersonalInfoScreen from "../pages/SettingsScreen/PersonalInfoScreen";
// import HelpScreen from "../pages/SettingsScreen/HelpScreen";
// import LanguageScreen from "../pages/SettingsScreen/LanguageScreen";
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";
import TabBar from "./TabBar";
import { RegistrationPage } from "../pages/RegistrationPage";
import { LoginPage } from "../pages/LoginPage";
import { SuccessAuthPage } from "../pages/SuccesAuthPage";
// import { LEFT_ARROW } from "../../assets";



export type RootStackParamList = {
  Registration: undefined;
  Login: undefined;
  Main: undefined;
  Route: undefined;
  Profile: undefined;
  SuccessAuth: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Registration"
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: 'pop',
        animation: 'slide_from_bottom',
        headerTitleAlign: 'center'
      }}
    >
       <Stack.Screen name="Registration" component={RegistrationPage} />
       <Stack.Screen name="Login" component={LoginPage} />
       <Stack.Screen name="SuccessAuth" component={SuccessAuthPage} />

      <Stack.Screen
        name='Main'
        component={TabBar}
        options={{
          title: 'Профиль'
        }}
      />
      {/*<Stack.Screen name="Sign-in" component={SignIn} />

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
