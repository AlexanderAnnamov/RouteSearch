import React from "react";

import { MainPage } from "../pages/MainPage";
import { RoutePage } from "../pages/RoutePage";
import { ProfilePage } from "../pages/ProfilePage";

import ProfileIcon from '../assets/img/icons/profle.svg'
import RouteIcon from '../assets/img/icons/route.svg'
import HomeIcon from '../assets/img/icons/home.svg'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../constants/styles/colors";

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Главная"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === "Маршрут") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
            return (
              <RouteIcon stroke={color} />
            );
          } else if (route.name === "Главная") {
            iconName = focused ? "ios-list" : "ios-list-outline";
            return <HomeIcon stroke={color} />;
          } else if (route.name === "Профиль") {
            iconName = focused ? "ios-list" : "ios-list-outline";
            return <ProfileIcon stroke={color} />;
          }
        },

        tabBarIconStyle: {
          width: '100%'
        },
        tabBarActiveTintColor: colors.textPrimary,
        tabBarInactiveTintColor: colors.iconDisabled,
        headerShown: false,
        headerStatusBarHeight: 0,
        tabBarStyle: {
          position: "absolute",
          borderTop: "0.5px solid #F2F2F2",
          height: 80,
          paddingTop: 8,
          backgroundColor: colors.white,
        },
      })}
    >
      <Tab.Screen name="Маршрут" component={RoutePage} />
      <Tab.Screen name="Главная" component={MainPage} />
      <Tab.Screen name="Профиль" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default TabBar;
