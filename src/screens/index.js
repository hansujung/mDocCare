import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import LoginScreen from "./LoginScreen";
import LandingScreen from "./LandingScreen";
import SettingScreen from "./SettingScreen";
import SomethingScreen from "./SomethingScreen";
import ChatScreen from "./ChatScreen";
import StartScreen from "./StartScreen";

const AppStack = createStackNavigator(
  {
      LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
          header: null
        }},
      LandingScreen: {screen: LandingScreen,
        navigationOptions: {
          header: null
        }},
      StartScreen: {screen: StartScreen,
        navigationOptions: {
          header: null
        }},
      ChatScreen: {screen: ChatScreen,
        navigationOptions: {
          header: null
        }},
  },
  {
      initialRouteName: 'LandingScreen'
  }
);


export default createAppContainer(AppStack);