import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { HomeStack } from "navigation/HomeStack/HomeStack";
import { LoginScreen } from "screens/LoginScreen/LoginScreen";
import { SCREEN_NAME as HOME_STACK_SCREEN_NAME } from "navigation/HomeStack/constants";
import { SCREEN_NAME as LOGIN_SCREEN_NAME } from "screens/LoginScreen/constants";
import { PathConfigMap } from "@react-navigation/native";
import { homeStackLinking } from "navigation/HomeStack/HomeStack";

import { RootStackParamList } from "./types";

export const rootStackLinking: PathConfigMap = {
  [HOME_STACK_SCREEN_NAME]: {
    path: "",
    screens: homeStackLinking,
  },
  [LOGIN_SCREEN_NAME]: "login",
};

interface RootStackProps {}

export const RootStack = React.memo<RootStackProps>(({}) => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <>
      <Stack.Navigator initialRouteName={HOME_STACK_SCREEN_NAME}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={HOME_STACK_SCREEN_NAME}
          component={HomeStack}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={LOGIN_SCREEN_NAME}
          component={LoginScreen}
        />
      </Stack.Navigator>
    </>
  );
});
