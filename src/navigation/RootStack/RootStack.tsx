import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { RootStackParamList } from "./types";
import { HomeStack } from "../HomeStack/HomeStack";
import { LoginScreen } from "screens/LoginScreen/LoginScreen";

interface RootStackProps {}

export const RootStack = React.memo<RootStackProps>(({}) => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="home"
          component={HomeStack}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </>
  );
});
