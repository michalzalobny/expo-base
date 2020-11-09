import React from "react";
import {
  NavigationContainer,
  LinkingOptions,
  PathConfigMap,
} from "@react-navigation/native";

import { RootStack, rootStackLinking } from "navigation/RootStack/RootStack";

export default function App() {
  const linking: LinkingOptions = {
    prefixes: ["https://testadres.com", "testadres://"],
    config: {
      screens: rootStackLinking,
    },
  };
  return (
    <NavigationContainer linking={linking}>
      <RootStack></RootStack>
    </NavigationContainer>
  );
}
